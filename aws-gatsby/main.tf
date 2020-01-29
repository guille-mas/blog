terraform {
  required_providers {
    aws = ">= 2.46.0"
  }
}

provider "aws" {
  region  = var.region
}

// ----------------------------------
// S3 bucket hosting
// ---------------------------

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    sid = "AllowCloudFront"
    effect = "Allow"
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*"
    ]

    principals {
      type = "AWS"
      identifiers = ["arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.origin_access_identity.id}"]
    }
  }
}

// Allow Cloudfront CDN read access to S3 bucket
resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
  acl    = "private"
  policy = data.aws_iam_policy_document.bucket_policy.json

  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}


// ----------------------------------
// AWS ACM Certificate
// ---------------------------

resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain
  validation_method = "DNS"

  tags = {
    Terraform = true
  }

  lifecycle {
    create_before_destroy = true
  }
}

data "aws_route53_zone" "zone" {
  name         = "${var.domain}."
  private_zone = false
}

resource "aws_route53_record" "cert_validation" {
  name    = lookup(aws_acm_certificate.cert.domain_validation_options[0], "resource_record_name")
  type    = lookup(aws_acm_certificate.cert.domain_validation_options[0], "resource_record_type")
  records = [lookup(aws_acm_certificate.cert.domain_validation_options[0], "resource_record_value")]
  zone_id = data.aws_route53_zone.zone.id
  ttl     = 60
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [aws_route53_record.cert_validation.fqdn]
}



//----------------------------
// CloudFront

locals {
  s3_origin_id = "S3-${var.bucket_name}"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  price_class  = "PriceClass_100"
  default_root_object = "index.html"
  aliases = [var.domain]

  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  custom_error_response {
    error_code = 403
    response_code = 200
    response_page_path = "/index.html"
  }

  logging_config {
    include_cookies = false
    bucket          = "${var.bucket_name}.s3.amazonaws.com"
    prefix          = "cloudfront_logs"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.s3_origin_id
    forwarded_values {
      query_string = false
      headers = ["Origin", "Access-Control-Request-Method", "Access-Control-Request-Headers"]
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
    #compress               = true
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    #minimum_protocol_version = "TLSv1.1_2016"
    ssl_support_method = "sni-only"
  }

  depends_on = [aws_acm_certificate.cert]
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "website"
}
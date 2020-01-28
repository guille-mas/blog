variable "bucket_name" {
  description = "name of the S3 bucket that will host the blog"
}

variable "domain" {
  description = "a domain for this blog"
}

variable "region" {
  description = "the region to create the S3 bucket"
}

variable "aws_access_key_id" {}

variable "aws_secret_access_key" {}


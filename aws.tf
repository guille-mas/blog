
module "guille_cloud_blog" {
    source = "./aws-gatsby"
    domain = var.domain
    bucket_name = var.bucket_name
    region  = var.region
    aws_access_key_id = var.aws_access_key_id
    aws_secret_access_key = var.aws_secret_access_key
}

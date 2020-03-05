<?php

header('Content-Type: application/json');

print(json_encode([
    "HTTP_PORT"         => getenv("HTTP_PORT"),
    "HTTPS_PORT"        => getenv("HTTPS_PORT"),
    "APP_ROOT_DIR"      => getenv("APP_ROOT_DIR"),
    "APP_PUBLIC_DIR"    => getenv("APP_PUBLIC_DIR"),
    "IMAGE_VERSION_TAG" => getenv("IMAGE_VERSION_TAG")
]));


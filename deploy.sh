#!/bin/bash

# Deploy script for S3 and CloudFront
# Requires environment variables: S3_BUCKET and CLOUDFRONT_DISTRIBUTION_ID

set -e

# Load environment variables from .env file if it exists
if [ -f .env ]; then
  echo "Loading environment variables from .env file..."
  set -a
  source .env
  set +a
fi

# Check if required environment variables are set
if [ -z "$S3_BUCKET" ]; then
  echo "Error: S3_BUCKET environment variable is not set"
  exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  echo "Error: CLOUDFRONT_DISTRIBUTION_ID environment variable is not set"
  exit 1
fi

# Build the project
echo "Building project..."
yarn build

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found. Build may have failed."
  exit 1
fi

if [ -z "$AWS_PROFILE" ]; then
  echo "Error: AWS_PROFILE environment variable is not set"
  exit 1
fi

# Sync files to S3 (exclude .DS_Store and other system files)
echo "Syncing files to S3 bucket: $S3_BUCKET"
aws s3 sync dist/ s3://$S3_BUCKET/ --delete --exclude ".DS_Store" --exclude "**/.DS_Store" --profile $AWS_PROFILE

# Invalidate CloudFront cache
echo "Invalidating CloudFront distribution: $CLOUDFRONT_DISTRIBUTION_ID"
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment completed successfully!"


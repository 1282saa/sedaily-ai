#!/bin/bash

# React 앱 S3 배포 스크립트
BUCKET_NAME="sedaily-ai-frontend"
DISTRIBUTION_ID="E22E86ANRQLD7U"
REGION="ap-northeast-2"

echo "🚀 sedaily.ai React 앱 배포 시작..."

# 빌드
echo "📦 프로젝트 빌드 중..."
npm run build

# S3에 파일 동기화 (dist 폴더의 내용을 업로드)
echo "📤 S3에 파일 업로드 중..."
aws s3 sync dist/ s3://$BUCKET_NAME \
  --exclude ".DS_Store" \
  --delete \
  --cache-control max-age=31536000,public \
  --metadata-directive REPLACE

# index.html은 캐시 제어를 다르게 설정 (no-cache)
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
  --cache-control no-cache,no-store,must-revalidate \
  --content-type text/html \
  --metadata-directive REPLACE

# CloudFront 캐시 무효화
echo "🗑️  CloudFront 캐시 무효화 중..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "✅ 배포 완료!"
echo "📌 캐시 무효화 ID: $INVALIDATION_ID"
echo "⏱️  변경사항이 1-2분 내에 반영됩니다."
echo "🌐 https://sedaily.ai 에서 확인하세요!"
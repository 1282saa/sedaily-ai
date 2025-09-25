# 서울경제 디지털 React App

서울경제 디지털 웹사이트를 React로 구현한 프로젝트입니다.

## 프로젝트 구조

```
sedaily-react-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # 네비게이션 바
│   │   ├── Footer.tsx          # 푸터
│   │   ├── HeroSection.tsx     # 히어로 섹션
│   │   └── FeaturesSection.tsx # 기능 소개 섹션
│   ├── pages/
│   │   ├── HomePage.tsx        # 메인 페이지
│   │   ├── AIPrismPage.tsx     # AI PRISM 페이지
│   │   ├── EconomicDragonPage.tsx # 경제용 페이지
│   │   └── LoginPage.tsx       # 로그인 페이지
│   ├── styles/
│   │   └── index.css          # 전체 스타일
│   ├── App.tsx                # 메인 앱 컴포넌트
│   └── index.tsx              # 진입점
├── package.json
└── tsconfig.json
```

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

애플리케이션이 [http://localhost:5175](http://localhost:5175)에서 실행됩니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

## 배포

### 자동 배포 (권장)
```bash
./deploy.sh
```

이 스크립트는 자동으로:
1. 프로젝트를 빌드합니다
2. S3 버킷(`sedaily-ai-frontend`)에 파일을 업로드합니다
3. CloudFront 캐시를 무효화합니다
4. 1-2분 내에 변경사항이 반영됩니다

**현재 접속 URL**: https://d3rtkeea8wpgsg.cloudfront.net
**도메인 연결 후**: https://sedaily.ai

### 수동 배포
```bash
# 1. 빌드
npm run build

# 2. S3에 업로드
aws s3 sync dist/ s3://sedaily-ai-frontend --delete

# 3. CloudFront 캐시 무효화
aws cloudfront create-invalidation --distribution-id E22E86ANRQLD7U --paths "/*"
```

### 배포 환경 정보
- **도메인**: https://sedaily.ai (도메인 연결 필요)
- **S3 버킷**: sedaily-ai-frontend
- **CloudFront Distribution ID**: E22E86ANRQLD7U
- **CloudFront 도메인**: d3rtkeea8wpgsg.cloudfront.net
- **AWS 리전**: ap-northeast-2 (서울)

## 주요 기능

- **홈페이지**: 서울경제 디지털의 메인 페이지
- **AI PRISM**: AI 기반 맞춤형 뉴스 큐레이션 서비스
- **경제용**: 경제 교육 콘텐츠 플랫폼
- **로그인**: 사용자 인증 페이지

## 기술 스택

- React 18
- TypeScript
- React Router v6
- Vite (번들러)
- CSS (Custom properties)

## 페이지별 라우팅

- `/` - 홈페이지
- `/ai-prism` - AI PRISM 서비스
- `/economic-dragon` - 경제용 서비스
- `/login` - 로그인 페이지
# 라온피플 랜딩페이지

토스 스타일의 트렌디한 디자인으로 제작된 라온피플 공식 랜딩페이지입니다.

## 🚀 기술 스택

- **Next.js 15** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안전성을 위한 정적 타입 언어
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **ShadCN UI** - 모던한 UI 컴포넌트 라이브러리
- **Lucide React** - 아이콘 라이브러리

## 🎨 디자인 특징

- **토스 스타일**: 깔끔하고 모던한 디자인
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **다크/라이트 모드**: 자동 테마 전환 지원
- **애니메이션**: 부드러운 인터랙션과 전환 효과
- **그라디언트**: 시각적 임팩트를 위한 그라디언트 효과

## 📋 주요 섹션

### 1. Hero 섹션

- 임팩트 있는 메인 메시지
- 통계 정보 표시
- CTA 버튼과 데모 링크

### 2. Solutions 섹션

- SMART FACTORY 솔루션
- SMART LIFE 솔루션
- 핵심 기술 소개

### 3. Products 섹션

- HI FENN (생성형 AI 플랫폼)
- OdinAi (영상 관제 솔루션)
- NAVI AI PRO (고속 추론 엔진)
- EZ PLANET (MLOps 플랫폼)
- Laon Swingcraft (골프 AI)

### 4. Industries 섹션

- 적용 가능한 15+ 산업 분야
- 각 산업별 특화 솔루션
- 성과 통계

### 5. About 섹션

- 회사 소개 및 핵심 가치
- 주요 성과 및 인증
- 미션 & 비전

### 6. Contact 섹션

- 연락처 정보
- 빠른 문의 양식
- 오시는 길

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 레이아웃 컴포넌트
│   └── page.tsx            # 메인 페이지
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 헤더 컴포넌트
│   │   └── Footer.tsx      # 푸터 컴포넌트
│   ├── sections/
│   │   ├── Hero.tsx        # 히어로 섹션
│   │   ├── Solutions.tsx   # 솔루션 섹션
│   │   ├── Products.tsx    # 제품 섹션
│   │   ├── Industries.tsx  # 산업 섹션
│   │   ├── About.tsx       # 회사 소개 섹션
│   │   └── Contact.tsx     # 연락처 섹션
│   └── ui/                 # ShadCN UI 컴포넌트
└── lib/
    └── utils.ts            # 유틸리티 함수
```

## 🎨 컴포넌트 특징

### 반응형 디자인

- 모바일 우선 설계
- Tailwind CSS의 반응형 클래스 활용
- 다양한 화면 크기에 최적화

### 애니메이션 효과

- CSS 키프레임 애니메이션
- Hover 효과
- 페이지 전환 애니메이션

### 접근성

- 시맨틱 HTML 구조
- ARIA 라벨링
- 키보드 내비게이션 지원

## 🔧 커스터마이징

### 색상 테마

`src/app/globals.css`에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다.

### 컴포넌트 스타일

각 컴포넌트는 Tailwind CSS 클래스를 사용하여 스타일링되어 있어 쉽게 수정할 수 있습니다.

### 콘텐츠 수정

각 섹션 컴포넌트 내의 데이터 배열을 수정하여 콘텐츠를 업데이트할 수 있습니다.

## 📱 모바일 최적화

- 터치 친화적 인터페이스
- 빠른 로딩 시간
- 최적화된 이미지 크기
- Progressive Web App (PWA) 지원 가능

## 🌟 주요 기능

- **SEO 최적화**: Next.js의 SSR을 활용한 검색엔진 최적화
- **성능 최적화**: 이미지 최적화 및 코드 스플리팅
- **타입 안전성**: TypeScript를 통한 런타임 에러 방지
- **모던 UI**: 최신 디자인 트렌드 적용

## 🤝 기여하기

1. 프로젝트를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이센스

이 프로젝트는 라온피플㈜의 소유입니다.

---

**라온피플㈜** - AI VISION 기술의 글로벌 리더

- 웹사이트: [https://www.laonpeople.com](https://www.laonpeople.com)
- 이메일: sales@laonpeople.com
- 전화: 1899-3058

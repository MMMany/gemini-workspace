# Gemini Workspace Frontend Sample App

이 프로젝트는 React 생태계의 주요 도구들을 활용한 프론트엔드 초기 세팅 및 샘플 애플리케이션입니다.

"Gemini" 앱을 통해 샘플 코드 생성과 "GitHub Pages"를 이용한 샘플 확인 목적의 프로젝트입니다.

## 🛠 기술 스택

- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Framework**: [React](https://react.dev/) (JavaScript, JSX)
- **UI Component Library**: [MUI (Material UI)](https://mui.com/) (`@mui/material`, `@emotion/react`, `@emotion/styled`, `@mui/icons-material`)
- **Routing**: [React Router v6](https://reactrouter.com/) (`react-router-dom`)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) (`react-hook-form`)
- **Code Quality & Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📁 프로젝트 구조

```text
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   └── Layout.jsx
    └── pages/
        ├── HomePage.jsx
        └── FormPage.jsx
```

## 🚀 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

기본적으로 `http://localhost:3000`에서 개발 서버가 실행됩니다.

### 3. 빌드 및 미리보기

```bash
npm run build
npm run preview
```

### 4. 린트 및 코드 포맷팅

```bash
# 코드 검사 (ESLint)
npm run lint

# 코드 포맷팅 (Prettier)
npm run format
```

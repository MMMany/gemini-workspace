import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  // GitHub Actions 배포 환경(CI)에서만 저장소 서브 경로를 사용하고,
  // 로컬 개발/빌드/프리뷰(dev, build, preview)에서는 루트('/') 적용
  const isCI = process.env.GITHUB_ACTIONS === 'true';
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'gemini-workspace';
  const base = isCI ? `/${repoName}/` : '/';

  return {
    base,
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});

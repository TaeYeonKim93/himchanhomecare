import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // 개발 환경 설정
  const devConfig = {
    server: {
      host: 'localhost',
      port: 3000,
      strictPort: true
    }
  };

  // 프로덕션 환경 설정
  const prodConfig = {
    server: {
      https: {
        key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/himchan.hopto.org/privkey.pem')),
        cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/himchan.hopto.org/fullchain.pem'))
      },
      host: true,
      port: 444,
      strictPort: true
    }
  };

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: env.VITE_ENABLE_SOURCEMAP === 'true'
    },
    // 모드에 따라 설정 적용
    ...(mode === 'production' ? prodConfig : devConfig)
  };
});

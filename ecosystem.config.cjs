module.exports = {
  apps: [{
    name: 'himchanhomecare',
    script: 'npm',
    args: 'run preview',
    env: {
      NODE_ENV: 'production',
      PORT: 444
    },
    // 권한 관련 설정
    exec_interpreter: 'none',
    exec_mode: 'fork',
    exec_user: 'root',
    max_memory_restart: '1G',
    // Git과 빌드 자동화 설정
    watch: ["src"],  // 특정 디렉토리만 감시
    ignore_watch: ["node_modules", "logs", ".git", "*.log", "dist"],
    watch_delay: 1000,
    watch_options: {
      followSymlinks: false
    },
    autorestart: true,
    exp_backoff_restart_delay: 100,
    // 파일 변경 감지시 실행할 스크립트 (순서 변경)
    watch_exec: "git pull && npm install && npm run build",
    // 오류 발생시 재시작 관련 설정
    max_restarts: 10,
    restart_delay: 3000
  }]
};

/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

import React from 'react';

export const Logo = ({ className = "h-20 w-auto" }: { className?: string }) => (
  <img
    src="/images/logo.svg"
    alt="힘찬홈케어 로고"
    className={className}
  />
);
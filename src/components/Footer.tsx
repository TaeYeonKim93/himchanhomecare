import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-bold text-white">힘찬홈케어</span>
          </div>
          <div className="text-gray-400">
            <p>사업자등록번호: 000-00-00000</p>
            <p>대표: 홍길동</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2024 힘찬홈케어. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
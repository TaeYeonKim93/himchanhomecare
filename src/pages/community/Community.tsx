import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';

interface Notice {
  id: number;
  category: string;
  title: string;
  date: string;
  views: number;
  isImportant?: boolean;
}

export default function Community() {
  const notices: Notice[] = [
    {
      id: 1,
      category: '공지',
      title: '2024년 요양보호사 정기교육 일정 안내',
      date: '2024.03.20',
      views: 128,
      isImportant: true
    },
    {
      id: 2,
      category: '공지',
      title: '코로나19 예방을 위한 방역수칙 안내',
      date: '2024.03.15',
      views: 95,
      isImportant: true
    },
    {
      id: 3,
      category: '안내',
      title: '3월 무료 방문요양 상담 신청 안내',
      date: '2024.03.10',
      views: 67
    },
    {
      id: 4,
      category: '안내',
      title: '요양보호사 추가 모집 공고',
      date: '2024.03.05',
      views: 142
    },
    {
      id: 5,
      category: '안내',
      title: '장기요양등급 신청 무료 대행 서비스 안내',
      date: '2024.03.01',
      views: 89
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">공지사항</h1>
          
          {/* 검색 영역 */}
          <div className="mb-8">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                검색
              </button>
            </div>
          </div>

          {/* 공지사항 목록 */}
          <div className="border-t border-gray-200">
            {notices.map((notice) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  notice.isImportant ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center py-4 px-4 cursor-pointer">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    notice.isImportant 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {notice.category}
                  </span>
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg text-gray-900">{notice.title}</h3>
                  </div>
                  <div className="text-sm text-gray-500 mr-8">{notice.date}</div>
                  <div className="text-sm text-gray-500">조회 {notice.views}</div>
                  <ChevronRight className="ml-4 w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                이전
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                다음
              </button>
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
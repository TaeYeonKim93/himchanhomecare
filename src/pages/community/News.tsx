import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    date: '2024-03-15',
    title: '2025년 장기요양 수가 인상 안내',
    content: '2025년도 장기요양 수가가 전년 대비 평균 5.29% 인상됩니다.',
    category: '공지사항'
  },
  {
    id: 2,
    date: '2024-03-10',
    title: '요양보호사 정기교육 실시',
    content: '3월 정기 요양보호사 교육이 진행됩니다.',
    category: '교육'
  },
  {
    id: 3,
    date: '2024-03-05',
    title: '노인장기요양보험 본인부담금 경감 대상자 확대',
    content: '4월부터 본인부담금 경감 대상자가 확대됩니다.',
    category: '공지사항'
  }
];

export default function News() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">센터소식</h1>
          <p className="text-lg text-gray-600">힘찬홈케어의 새로운 소식을 전해드립니다</p>
        </motion.div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{item.date}</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                자세히 보기
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              이전
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              다음
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Eye, ChevronRight } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
}

export default function Board() {
  const posts: Post[] = [
    {
      id: 1,
      title: '요양보호사 일하면서 보람찼던 순간',
      author: '행복한마음',
      date: '2024.03.20',
      views: 45,
      comments: 12
    },
    {
      id: 2,
      title: '어르신 케어 꿀팁 공유해요',
      author: '사랑드림',
      date: '2024.03.19',
      views: 68,
      comments: 15
    },
    {
      id: 3,
      title: '신입 요양보호사 궁금한 점 있어요',
      author: '새내기케어',
      date: '2024.03.18',
      views: 92,
      comments: 8
    },
    {
      id: 4,
      title: '요양보호사 자격증 취득 후기',
      author: '열심히공부',
      date: '2024.03.17',
      views: 156,
      comments: 23
    },
    {
      id: 5,
      title: '어르신과의 즐거운 산책 이야기',
      author: '따뜻한마음',
      date: '2024.03.16',
      views: 78,
      comments: 9
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">자유게시판</h1>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              글쓰기
            </button>
          </div>

          {/* 검색 영역 */}
          <div className="mb-8">
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>전체</option>
                <option>제목</option>
                <option>내용</option>
                <option>작성자</option>
              </select>
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

          {/* 게시글 목록 */}
          <div className="border-t border-gray-200">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center py-4 px-4 cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-lg text-gray-900">{post.title}</h3>
                    <div className="mt-1 text-sm text-gray-500">
                      {post.author}
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                    <div>{post.date}</div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
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
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Image, Users } from 'lucide-react';

export default function Community() {
  const posts = [
    {
      id: 1,
      title: '어르신과 함께하는 봄 나들이',
      date: '2024.03.15',
      category: '활동소식',
      imageUrl: '/images/placeholder.jpg',
      excerpt: '따뜻한 봄날, 어르신들과 함께한 즐거운 나들이 이야기를 공유합니다.',
    },
    {
      id: 2,
      title: '요양보호사 정기 교육 안내',
      date: '2024.03.10',
      category: '공지사항',
      imageUrl: '/images/placeholder.jpg',
      excerpt: '3월 정기 교육 일정 및 참석 안내드립니다.',
    },
    {
      id: 3,
      title: '어르신 생신잔치',
      date: '2024.03.05',
      category: '활동소식',
      imageUrl: '/images/placeholder.jpg',
      excerpt: '3월에 생신을 맞으신 어르신들을 위한 특별한 시간을 가졌습니다.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">커뮤니티</h1>
          <p className="text-lg text-gray-600">힘찬홈케어의 소식과 이야기를 나눕니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <MessageCircle className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">공지사항</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Calendar className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">활동소식</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Image className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">갤러리</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Users className="w-10 h-10 text-rose-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">자유게시판</h3>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 소식</h2>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                    {post.category}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-gray-500">{post.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import { motion } from 'framer-motion';

export default function Greeting() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">인사말</h1>
          <p className="text-lg text-gray-600">따뜻한 마음으로 모시겠습니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80"
              alt="센터장"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                안녕하십니까, 힘찬홈케어 센터장 홍길동입니다.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                우리 센터는 2010년 설립 이후, 어르신들의 행복한 노후를 위해 
                최선을 다해 서비스를 제공해 왔습니다. 전문성을 갖춘 요양보호사들이 
                정성을 다해 어르신들을 모시고 있으며, 가족과 같은 마음으로 
                어르신들의 건강과 일상생활을 지원하고 있습니다.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                앞으로도 어르신들의 편안하고 행복한 노후를 위해 
                최선을 다하겠습니다. 어르신들의 건강과 행복을 위해 
                항상 노력하는 힘찬홈케어가 되겠습니다.
              </p>

              <div className="text-right mt-8">
                <p className="text-gray-900 font-semibold">힘찬홈케어</p>
                <p className="text-gray-900 font-semibold">센터장 홍길동</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">센터 운영 철학</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">1.</span>
              <p className="text-gray-600">어르신을 내 부모님처럼 정성을 다해 모시겠습니다.</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">2.</span>
              <p className="text-gray-600">전문적이고 체계적인 서비스로 신뢰를 쌓겠습니다.</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">3.</span>
              <p className="text-gray-600">지속적인 교육과 관리로 서비스 품질을 높이겠습니다.</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">4.</span>
              <p className="text-gray-600">보호자와의 원활한 소통으로 신뢰받는 센터가 되겠습니다.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
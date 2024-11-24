import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Users } from 'lucide-react';

export default function HomeCare() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">방문요양서비스</h1>
          <p className="text-lg text-gray-600">전문 요양보호사가 어르신의 가정을 방문하여 맞춤 서비스를 제공합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
              alt="방문요양서비스"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2025년 방문요양 수가</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">30분</span>
                  <div>
                    <span className="font-medium">16,940원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 2,541원)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">60분</span>
                  <div>
                    <span className="font-medium">24,580원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 3,687원)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">90분</span>
                  <div>
                    <span className="font-medium">33,120원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 4,968원)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">120분</span>
                  <div>
                    <span className="font-medium">42,160원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 6,324원)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">* 본인부담금은 15%입니다.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Heart className="w-12 h-12 text-rose-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">신체활동 지원</h3>
            <p className="text-gray-600">식사도움, 세면도움, 옷갈아입히기, 구강관리, 신체기능의 유지, 화장실 이용 등</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">일상생활 지원</h3>
            <p className="text-gray-600">취사, 청소, 세탁, 외출동행, 생활필수품 구매 등</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">정서지원</h3>
            <p className="text-gray-600">말벗, 격려와 위로, 생활상담, 의사소통 도움 등</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">건강관리</h3>
            <p className="text-gray-600">건강체크, 투약돕기, 병원동행, 재활운동 보조 등</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
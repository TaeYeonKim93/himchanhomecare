import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bath, FileQuestion } from 'lucide-react';

export default function ServiceIntro() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">서비스 소개</h1>
          <p className="text-lg text-gray-600">힘찬홈케어가 제공하는 전문 요양 서비스를 소개합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Heart className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">방문요양</h3>
            <p className="text-gray-600 mb-4">
              전문 요양보호사가 어르신의 가정을 방문하여 신체활동 및 일상생활을 지원합니다.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 신체활동 지원</li>
              <li>• 일상생활 지원</li>
              <li>• 정서 지원</li>
              <li>• 인지활동 지원</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Bath className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">방문목욕</h3>
            <p className="text-gray-600 mb-4">
              전문 장비를 갖춘 차량으로 방문하여 안전하고 편안한 목욕 서비스를 제공합니다.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 목욕 전 건강상태 체크</li>
              <li>• 전문 요양보호사 2인 1조</li>
              <li>• 목욕 전용 차량 이용</li>
              <li>• 안전하고 편안한 목욕 도움</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <FileQuestion className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">무료등급신청대행</h3>
            <p className="text-gray-600 mb-4">
              장기요양등급 신청부터 판정까지 무료로 도와드립니다.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 방문 상담</li>
              <li>• 신청서류 준비 및 접수</li>
              <li>• 의사소견서 발급 지원</li>
              <li>• 등급판정 결과 안내</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
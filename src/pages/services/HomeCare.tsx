import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Users } from 'lucide-react';

export default function HomeCare() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">방문요양서비스</h1>
          <p className="text-base md:text-lg text-gray-600">전문 요양보호사가 어르신의 가정을 방문하여 맞춤 서비스를 제공합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/images/yoyang.jpg"
              alt="방문요양서비스"
              className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">방문요양서비스 소개</h2>
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-600">
                  방문요양서비스는 장기요양등급을 받은 어르신의 가정을 전문 요양보호사가 방문하여 신체활동 및 일상생활을 도와드리는 서비스입니다.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">서비스 특징</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>전문 교육을 이수한 요양보호사가 방문</li>
                    <li>어르신의 상태와 필요에 맞는 맞춤형 서비스</li>
                    <li>정기적인 서비스 품질 관리와 모니터링</li>
                    <li>보호자와의 원활한 소통과 정보 공유</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">이용 대상</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>장기요양등급 1~5등급 판정을 받은 어르신</li>
                    <li>일상생활 수행에 도움이 필요한 어르신</li>
                    <li>가족의 돌봄이 어려운 어르신</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-rose-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">신체활동 지원</h3>
            <p className="text-sm md:text-base text-gray-600">식사도움, 세면도움, 옷갈아입히기, 구강관리, 신체기능의 유지, 화장실 이용 등</p>
          </div>
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
            <Clock className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">일상생활 지원</h3>
            <p className="text-sm md:text-base text-gray-600">취사, 청소, 세탁, 외출동행, 생활필수품 구매 등</p>
          </div>
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">정서지원</h3>
            <p className="text-sm md:text-base text-gray-600">말벗, 격려와 위로, 생활상담, 의사소통 도움 등</p>
          </div>
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">건강관리</h3>
            <p className="text-sm md:text-base text-gray-600">건강체크, 투약돕기, 병원동행, 재활운동 보조 등</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
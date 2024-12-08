import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Heart, Award } from 'lucide-react';

export default function CenterIntro() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">센터소개</h1>
          <p className="text-lg text-gray-600">힘찬홈케어는 어르신들의 행복한 노후를 위해 최선을 다하고 있습니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">센터 비전</h2>
            <p className="text-gray-600 leading-relaxed">
              힘찬홈케어는 어르신들에게 최상의 요양 서비스를 제공하여 
              건강하고 행복한 노후 생활을 영위할 수 있도록 돕는 것을 목표로 합니다. 
              우리는 전문성과 따뜻한 마음을 바탕으로 어르신 한 분 한 분을 
              내 부모님처럼 정성을 다해 모시겠습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">센터 특징</h2>
            <p className="text-gray-600 leading-relaxed">
              20년 이상의 풍부한 경험을 바탕으로 전문적이고 체계적인 
              요양 서비스를 제공합니다. 정기적인 교육과 철저한 위생 관리로 
              어르신들이 안전하고 편안하게 생활하실 수 있도록 
              최선을 다하고 있습니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-rose-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">전문성</h3>
            <p className="text-gray-600">20년 이상의 요양 서비스 경험</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">맞춤 케어</h3>
            <p className="text-gray-600">개인별 맞춤형 요양 서비스 제공</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">정성</h3>
            <p className="text-gray-600">내 부모님처럼 정성을 다하는 서비스</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">신뢰</h3>
            <p className="text-gray-600">믿을 수 있는 전문 요양보호사</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
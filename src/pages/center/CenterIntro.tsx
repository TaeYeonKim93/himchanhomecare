import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

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
          <p className="text-lg text-gray-600">최고의 서비스로 어르신의 행복한 노후를 지원합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">신뢰할 수 있는 서비스</h3>
            <p className="text-gray-600">전문성을 갖춘 요양보호사가 정성을 다해 서비스를 제공합니다.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-6"
          >
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">최우수 등급 기관</h3>
            <p className="text-gray-600">전국 재가 장기요양기관 평가 최우수기관(A등급)입니다.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center p-6"
          >
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">체계적인 관리</h3>
            <p className="text-gray-600">정기적인 모니터링과 피드백으로 서비스 품질을 관리합니다.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="prose max-w-none"
        >
          <h2 className="text-2xl font-bold mb-4">힘찬홈케어 소개</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            힘찬홈케어는 2010년 설립 이후 어르신들의 편안하고 행복한 노후를 위해 최선을 다하고 있습니다. 
            전문성을 갖춘 요양보호사들이 정성을 다해 어르신들을 모시고 있으며, 
            가족과 같은 마음으로 어르신들의 건강과 일상생활을 지원하고 있습니다.
          </p>

          <h3 className="text-xl font-bold mb-3">주요 서비스</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>방문요양서비스</li>
            <li>방문목욕서비스</li>
            <li>무료 등급신청 대행</li>
            <li>요양보호사 교육 및 관리</li>
          </ul>

          <h3 className="text-xl font-bold mb-3">센터 운영방침</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>어르신 중심의 맞춤형 서비스 제공</li>
            <li>정기적인 서비스 품질 모니터링</li>
            <li>요양보호사 정기 교육 및 역량 강화</li>
            <li>보호자와의 원활한 소통</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
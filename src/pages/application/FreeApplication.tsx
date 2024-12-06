import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Clock, Phone } from 'lucide-react';

export default function FreeApplication() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">무료등급신청대행</h1>
          <p className="text-lg text-gray-600">장기요양등급 신청부터 판정까지 무료로 도와드립니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">신청 자격</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">65세 이상 노인 또는 65세 미만으로 노인성 질환이 있는 자</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">건강보험가입자 또는 피부양자</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">장기요양이 필요한 상태여야 함</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">상담 문의</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">031-912-1997</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">평일 09:00 - 18:00</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">신청 절차</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="text-lg font-bold text-gray-900">상담신청 및 방문상담</h3>
                </div>
                <p className="text-gray-600 ml-12">전문 상담사가 방문하여 상세한 상담을 진행합니다.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-900">신청서류 준비 및 접수</h3>
                </div>
                <p className="text-gray-600 ml-12">필요한 모든 서류를 준비하여 접수를 도와드립니다.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-900">의사소견서 발급</h3>
                </div>
                <p className="text-gray-600 ml-12">의사소견서 발급을 위한 병원 방문을 동행해드립니다.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h3 className="text-lg font-bold text-gray-900">등급판정 및 결과안내</h3>
                </div>
                <p className="text-gray-600 ml-12">등급판정 결과를 안내하고 향후 절차를 설명해드립니다.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
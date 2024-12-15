import React from 'react';
import { motion } from 'framer-motion';
import { Bath, CheckCircle2, Shield, Heart } from 'lucide-react';

export default function BathService() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">방문목욕서비스</h1>
          <p className="text-lg text-gray-600">안전하고 편안한 목욕 서비스를 제공합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2025년 방문목욕 수가</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">차량이용(차량 내)</span>
                  <div>
                    <span className="font-medium">86,480원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 12,972원)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">차량이용(가정 내)</span>
                  <div>
                    <span className="font-medium">77,970원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 11,696원)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">차량미이용</span>
                  <div>
                    <span className="font-medium">48,690원</span>
                    <span className="text-sm text-gray-500 ml-2">(본인부담금 7,304원)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  * 본인부담금은 15%입니다.<br />
                  * 월 4회까지 이용 가능합니다.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">서비스 특징</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">전문 요양보호사 2인 1조 서비스</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">안전하고 편안한 목욕 환경</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Bath className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">서비스 과정</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">1.</span>
                  <span className="text-gray-600">방문 전 건강상태 체크</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">2.</span>
                  <span className="text-gray-600">목욕 준비 및 환경 점검</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">3.</span>
                  <span className="text-gray-600">안전하고 편안한 목욕 도움</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">4.</span>
                  <span className="text-gray-600">옷 갈아입히기 및 마무리</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">5.</span>
                  <span className="text-gray-600">서비스 후 건강상태 체크</span>
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">안전성</h3>
                <p className="text-gray-600">전문 인력으로 안전한 목욕 서비스 제공</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Heart className="w-12 h-12 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">전문성</h3>
                <p className="text-gray-600">숙련된 요양보호사의 체계적인 서비스</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
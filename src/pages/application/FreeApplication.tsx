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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">신청 절차</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">1. 전화상담</h3>
                  <p className="text-gray-600">031-912-1997로 전화주시면 자세히 상담해 드립니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">2. 서류준비</h3>
                  <p className="text-gray-600">필요한 서류를 안내해 드리고 준비를 도와드립니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">3. 신청접수</h3>
                  <p className="text-gray-600">국민건강보험공단에 신청서를 접수합니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">4. 결과안내</h3>
                  <p className="text-gray-600">등급판정 결과를 안내해 드립니다.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">준비 서류</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                신청서 (당사에서 작성 도와드립니다)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                신분증 사본
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                의사소견서 (발급을 도와드립니다)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                기타 필요 서류 (상담 시 안내)
              </li>
            </ul>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">신청 문의</h3>
              <p className="text-blue-800">전화: 031-912-1997</p>
              <p className="text-blue-800">팩스: 031-912-1998</p>
              <p className="text-sm text-blue-700 mt-2">
                * 방문 상담도 가능합니다. 전화로 문의해 주세요.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gray-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">꼭 알아두세요!</h2>
          <div className="text-gray-600 space-y-2">
            <p>• 등급신청은 본인 또는 가족이 신청할 수 있습니다.</p>
            <p>• 신청부터 판정까지 약 30일 정도 소요됩니다.</p>
            <p>• 모든 상담과 신청대행은 무료로 진행됩니다.</p>
            <p>• 궁금하신 점은 언제든 연락주세요.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
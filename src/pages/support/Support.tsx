import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Clock, Phone } from 'lucide-react';

export default function Support() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">후원 & 봉사</h1>
          <p className="text-lg text-gray-600">따뜻한 마음으로 함께해주세요</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-rose-500 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">후원 안내</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">후원계좌</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">농협은행 123-4567-8901-23</p>
                  <p className="text-gray-700">예금주: 힘찬홈케어</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">후원금 사용내역</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>어르신 생활용품 지원</li>
                  <li>문화활동 및 나들이 지원</li>
                  <li>시설 환경개선</li>
                  <li>프로그램 운영비</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">후원문의</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-500 mr-3" />
                    <span>031-912-1997</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-3" />
                    <span>평일 09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <HandHeart className="w-8 h-8 text-blue-500 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">봉사 안내</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">봉사활동 분야</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">말벗 봉사</h4>
                    <p className="text-gray-600">어르신들과 대화하며 정서적 교감을 나누는 활동</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">프로그램 봉사</h4>
                    <p className="text-gray-600">레크리에이션, 음악활동 등 프로그램 진행</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">환경정리 봉사</h4>
                    <p className="text-gray-600">시설 내외부 환경정리 및 청소</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">재능기부 봉사</h4>
                    <p className="text-gray-600">이미용, 의료, 공연 등 전문 재능기부</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">봉사신청 방법</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>전화 또는 방문 상담</li>
                  <li>봉사 신청서 작성</li>
                  <li>봉사자 기본 교육 이수</li>
                  <li>봉사활동 시작</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">봉사문의</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-500 mr-3" />
                    <span>031-912-1997</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-3" />
                    <span>평일 09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
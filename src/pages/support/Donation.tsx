import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Wallet, HelpingHand } from 'lucide-react';

export default function Donation() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">후원안내</h1>
          <p className="text-lg text-gray-600">어르신들의 행복한 노후를 위한 따뜻한 마음을 나눠주세요</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">후원금 사용계획</h2>
            <div className="prose max-w-none text-gray-600">
              <p>
                여러분의 소중한 후원금은 다음과 같이 사용됩니다:
              </p>
              <ul className="space-y-2">
                <li>저소득 어르신 의료비 지원</li>
                <li>어르신 생활용품 지원</li>
                <li>요양보호사 교육 및 처우 개선</li>
                <li>노인복지 프로그램 운영</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">후원계좌</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">신한은행</span>
                  <span className="font-medium">110-123-456789</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">예금주</span>
                  <span className="font-medium">힘찬홈케어</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">후원방법</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">정기후원</h4>
                    <p className="text-gray-600">매월 정기적으로 후원하실 수 있습니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Wallet className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">일시후원</h4>
                    <p className="text-gray-600">원하시는 금액을 1회 후원하실 수 있습니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">물품후원</h4>
                    <p className="text-gray-600">생활용품, 의료용품 등을 후원하실 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">후원문의</h3>
              <div className="space-y-2">
                <p className="text-gray-600">전화: 031-912-1997</p>
                <p className="text-gray-600">이메일: himchan@homecare.com</p>
                <p className="text-sm text-gray-500 mt-2">
                  * 후원금은 법인세법 제24조 및 소득세법 제34조에 의거 연말정산 시 소득공제 혜택을 받으실 수 있습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <HelpingHand className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            여러분의 작은 관심이 큰 힘이 됩니다
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            후원해 주신 소중한 마음은 어르신들의 행복한 노후를 위해 소중히 사용하겠습니다.
            정기적인 후원내역 보고를 통해 투명하게 운영하겠습니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
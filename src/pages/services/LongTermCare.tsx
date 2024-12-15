import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LongTermCare() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">노인장기요양제도</h1>
          <p className="text-lg text-gray-600">어르신들의 편안한 노후를 위한 사회보험제도입니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">제도 소개</h2>
            <p className="text-gray-600 leading-relaxed">
              노인장기요양보험제도는 고령이나 노인성 질환 등으로 일상생활을 혼자서 수행하기 
              어려운 노인들에게 신체활동 또는 가사지원 등의 장기요양급여를 제공하는 사회보험제도입니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2025년 방문요양 수가 안내</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">방문당 시간</th>
                      <th className="px-4 py-3 text-right">수가</th>
                      <th className="px-4 py-3 text-right">15% 부담</th>
                      <th className="px-4 py-3 text-right">9% 부담</th>
                      <th className="px-4 py-3 text-right">6% 부담</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">30분</td>
                      <td className="px-4 py-3 text-right font-medium">16,940원</td>
                      <td className="px-4 py-3 text-right text-gray-600">2,541원</td>
                      <td className="px-4 py-3 text-right text-gray-600">1,525원</td>
                      <td className="px-4 py-3 text-right text-gray-600">1,016원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">60분</td>
                      <td className="px-4 py-3 text-right font-medium">24,580원</td>
                      <td className="px-4 py-3 text-right text-gray-600">3,687원</td>
                      <td className="px-4 py-3 text-right text-gray-600">2,212원</td>
                      <td className="px-4 py-3 text-right text-gray-600">1,475원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">90분</td>
                      <td className="px-4 py-3 text-right font-medium">33,120원</td>
                      <td className="px-4 py-3 text-right text-gray-600">4,968원</td>
                      <td className="px-4 py-3 text-right text-gray-600">2,981원</td>
                      <td className="px-4 py-3 text-right text-gray-600">1,987원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">120분</td>
                      <td className="px-4 py-3 text-right font-medium">42,160원</td>
                      <td className="px-4 py-3 text-right text-gray-600">6,324원</td>
                      <td className="px-4 py-3 text-right text-gray-600">3,794원</td>
                      <td className="px-4 py-3 text-right text-gray-600">2,530원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">150분</td>
                      <td className="px-4 py-3 text-right font-medium">49,160원</td>
                      <td className="px-4 py-3 text-right text-gray-600">7,374원</td>
                      <td className="px-4 py-3 text-right text-gray-600">4,424원</td>
                      <td className="px-4 py-3 text-right text-gray-600">2,950원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">180분</td>
                      <td className="px-4 py-3 text-right font-medium">55,350원</td>
                      <td className="px-4 py-3 text-right text-gray-600">8,303원</td>
                      <td className="px-4 py-3 text-right text-gray-600">4,982원</td>
                      <td className="px-4 py-3 text-right text-gray-600">3,321원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">210분</td>
                      <td className="px-4 py-3 text-right font-medium">61,670원</td>
                      <td className="px-4 py-3 text-right text-gray-600">9,251원</td>
                      <td className="px-4 py-3 text-right text-gray-600">5,550원</td>
                      <td className="px-4 py-3 text-right text-gray-600">3,700원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">240분</td>
                      <td className="px-4 py-3 text-right font-medium">68,030원</td>
                      <td className="px-4 py-3 text-right text-gray-600">10,205원</td>
                      <td className="px-4 py-3 text-right text-gray-600">6,123원</td>
                      <td className="px-4 py-3 text-right text-gray-600">4,082원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">* 본인부담금은 소득 수준에 따라 15%, 9%, 6%로 차등 적용됩니다.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">등급 안내</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">1~5등급</h3>
                  <p className="text-gray-600">일상생활에서 도움이 필요한 정도에 따라 구분</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">인지지원등급</h3>
                  <p className="text-gray-600">치매환자를 위한 특별등급</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">신청 자격</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">65세 이상 노인</span>
                </li>
                <li className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">65세 미만의 노인성 질환이 있는 자</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">등급별 월 한도액 (2025년 기준)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">1등급</h3>
              <p className="text-blue-600 font-bold">2,306,400원</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">2등급</h3>
              <p className="text-blue-600 font-bold">2,083,400원</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">3등급</h3>
              <p className="text-blue-600 font-bold">1,485,700원</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">4등급</h3>
              <p className="text-blue-600 font-bold">1,370,600원</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">5등급</h3>
              <p className="text-blue-600 font-bold">1,177,000원</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">인지지원등급</h3>
              <p className="text-blue-600 font-bold">624,600원</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
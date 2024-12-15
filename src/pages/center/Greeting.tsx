import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Shield, Award } from 'lucide-react';

export default function Greeting() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">인사말</h1>
          <p className="text-lg text-gray-600">힘찬홈케어를 찾아주신 여러분을 진심으로 환영합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 opacity-10"></div>
            <img
              src="/images/센터장 사진.jpg"
              alt="센터장"
              className="relative rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <p className="font-bold text-gray-900">전국 재가 장기요양기관 평가 2회 연속 최우수기관 A등급</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">2019년 A등급</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">2023년 A등급</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-2xl font-medium text-gray-900 mb-6">
                안녕하세요,<br/>
                힘찬홈케어 센터장 양창숙입니다.
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  2016년 설립 이후, 저희 힘찬홈케어는 한결같은 마음으로 어르신들을 내 부모님처럼 모시며 
                  따뜻한 정성과 진심 어린 돌봄을 실천해 왔습니다.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  요양이 필요한 시기에 가장 중요한 것은 전문성과 함께하는 따뜻한 마음입니다. 
                  저희는 풍부한 경험과 전문성을 갖춘 요양보호사님들과 함께 
                  어르신 한 분 한 분의 건강과 행복을 위해 최선을 다하고 있습니다.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  가족처럼 편안하게 대화하고, 부모님처럼 정성껏 돌보며, 
                  어르신들의 일상에 기쁨과 활력을 더하는 것이 저희의 사명입니다.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  앞으로도 저희 힘찬홈케어는 어르신들의 건강하고 행복한 노후를 위해
                  끊임없이 연구하고 발전하며, 최상의 요양 서비스를 제공하기 위해 
                  항상 최선을 다하겠습니다.
                </p>
              </div>

              <div className="text-right mt-8 border-t pt-6">
                <p className="font-medium text-gray-900">힘찬홈케어 센터장</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">양 창 숙</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">따뜻한 마음</h3>
            <p className="text-gray-600">내 부모님을 모시는 마음으로 정성을 다하는 돌봄 서비스를 제공합니다.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">전문성</h3>
            <p className="text-gray-600">풍부한 경험과 전문 지식을 갖춘 요양보호사가 체계적인 케어를 제공합니다.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Clock className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">신뢰</h3>
            <p className="text-gray-600">2016년부터 쌓아온 신뢰와 경험으로 어르신의 행복한 노후를 지원합니다.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
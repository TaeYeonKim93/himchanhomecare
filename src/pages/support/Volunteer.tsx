import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, MapPin } from 'lucide-react';

const volunteerPrograms = [
  {
    title: '말벗 봉사',
    description: '어르신들과 대화하며 정서적 지원을 제공합니다.',
    time: '주 1회, 2시간',
    location: '어르신 가정'
  },
  {
    title: '프로그램 보조',
    description: '센터 내 각종 프로그램 진행을 보조합니다.',
    time: '주 2회, 3시간',
    location: '센터 내'
  },
  {
    title: '행정업무 지원',
    description: '문서작업, 전화상담 등 행정업무를 지원합니다.',
    time: '평일 중 선택',
    location: '센터 내'
  }
];

export default function Volunteer() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">봉사안내</h1>
          <p className="text-lg text-gray-600">어르신들의 행복한 노후를 위한 봉사활동에 참여해주세요</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {volunteerPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{program.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{program.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">봉사자 모집안내</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">지원자격</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  만 18세 이상 성인
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  주 1회 이상 정기적 봉사 가능자
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  노인복지에 관심이 있는 분
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">활동혜택</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  봉사활동 인증서 발급
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  봉사자 교육 제공
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  교통비 지원
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">신청방법</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                    1
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">신청서 작성</h4>
                    <p className="text-gray-600">온라인 또는 방문 신청</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                    2
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">기초교육 이수</h4>
                    <p className="text-gray-600">봉사자 기본교육 참석</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                    3
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">봉사활동 시작</h4>
                    <p className="text-gray-600">프로그램 배치 및 활동 시작</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">문의처</h3>
              <div className="space-y-2 text-gray-600">
                <p>담당자: 김봉사</p>
                <p>전화: 031-912-1997</p>
                <p>이메일: volunteer@himchan.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
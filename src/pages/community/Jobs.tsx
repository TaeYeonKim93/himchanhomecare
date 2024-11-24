import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, Phone } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: '방문요양 요양보호사',
    type: '정규직',
    location: '일산서구',
    workingHours: '09:00 - 18:00',
    requirements: [
      '요양보호사 자격증 소지자',
      '운전 가능자 우대',
      '경력자 우대'
    ],
    benefits: [
      '4대보험',
      '퇴직연금',
      '명절수당',
      '교통비 지원'
    ]
  },
  {
    id: 2,
    title: '방문목욕 요양보호사',
    type: '정규직',
    location: '일산서구',
    workingHours: '09:00 - 18:00',
    requirements: [
      '요양보호사 자격증 소지자',
      '운전면허 필수',
      '경력 1년 이상'
    ],
    benefits: [
      '4대보험',
      '퇴직연금',
      '명절수당',
      '차량 유지비 지원'
    ]
  }
];

export default function Jobs() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">요양보호사 구인</h1>
          <p className="text-lg text-gray-600">함께할 전문 요양보호사를 모십니다</p>
        </motion.div>

        <div className="space-y-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  지원하기
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{job.workingHours}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">자격요건</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">복리후생</h3>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">채용문의</h3>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-gray-600">031-912-1997</span>
          </div>
          <p className="mt-2 text-gray-600">
            * 전화 문의는 평일 09:00 - 18:00 가능합니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
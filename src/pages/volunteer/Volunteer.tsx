import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Phone } from 'lucide-react';

interface VolunteerProgram {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  description: string;
  status: '모집중' | '모집완료' | '활동완료';
}

export default function Volunteer() {
  const programs: VolunteerProgram[] = [
    {
      id: 1,
      title: '어르신 말벗 봉사',
      date: '2024.03.25',
      time: '14:00 - 16:00',
      location: '힘찬홈케어',
      maxParticipants: 10,
      currentParticipants: 5,
      description: '어르신들과 함께 이야기를 나누며 즐거운 시간을 보내는 봉사활동입니다.',
      status: '모집중'
    },
    {
      id: 2,
      title: '어르신 산책 도우미',
      date: '2024.03.28',
      time: '10:00 - 12:00',
      location: '일산 호수공원',
      maxParticipants: 15,
      currentParticipants: 15,
      description: '어르신들과 함께 봄나들이 산책을 하는 봉사활동입니다.',
      status: '모집완료'
    },
    {
      id: 3,
      title: '프로그램 활동 보조',
      date: '2024.03.30',
      time: '14:00 - 16:00',
      location: '힘찬홈케어 센터',
      maxParticipants: 8,
      currentParticipants: 3,
      description: '어르신들의 프로그램 활동을 보조하는 봉사활동입니다.',
      status: '모집중'
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">봉사활동</h1>

          {/* 봉사활동 안내 */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">봉사활동 안내</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 봉사활동 신청은 로그인 후 가능합니다.</li>
              <li>• 봉사활동 확인서는 활동 완료 후 발급됩니다.</li>
              <li>• 문의사항은 전화로 연락 부탁드립니다.</li>
            </ul>
            <div className="mt-4 flex items-center text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">031-912-1997</span>
            </div>
          </div>

          {/* 봉사활동 프로그램 목록 */}
          <div className="grid gap-6">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      program.status === '모집중'
                        ? 'bg-green-100 text-green-800'
                        : program.status === '모집완료'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {program.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{program.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{program.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>
                      {program.currentParticipants}/{program.maxParticipants}명
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{program.description}</p>

                <button
                  className={`w-full py-2 rounded-lg transition-colors ${
                    program.status === '모집중'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={program.status !== '모집중'}
                >
                  {program.status === '모집중' ? '신청하기' : '모집완료'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
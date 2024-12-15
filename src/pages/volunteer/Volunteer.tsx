import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Phone, Heart, Award, Camera } from 'lucide-react';

interface VolunteerActivity {
  id: number;
  title: string;
  frequency: string;
  location: string;
  beneficiaries: string;
  description: string;
  impact: string;
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  date: string;
  description: string;
}

export default function Volunteer() {
  const activities: VolunteerActivity[] = [
    {
      id: 1,
      title: '독거어르신 무료 방문요양',
      frequency: '주 3회',
      location: '일산서구 일대',
      beneficiaries: '기초수급자 및 차상위계층 어르신',
      description: '경제적 어려움으로 요양서비스를 받지 못하시는 어르신들을 위해 전문 요양보호사가 직접 방문하여 무료 요양서비스를 제공합니다.',
      impact: '연간 50명의 어르신께 무료 요양서비스 제공'
    },
    {
      id: 2,
      title: '치매예방 순회교육',
      frequency: '월 2회',
      location: '일산서구 관내 경로당',
      beneficiaries: '지역 어르신',
      description: '전문 강사진이 지역 경로당을 순회하며 치매 예방을 위한 인지활동 프로그램과 건강체조를 무료로 진행합니다.',
      impact: '매년 300명 이상의 어르신 참여'
    },
    {
      id: 3,
      title: '요양보호 무료상담',
      frequency: '상시',
      location: '힘찬홈케어 센터',
      beneficiaries: '지역주민',
      description: '장기요양등급 신청과 요양서비스에 대한 전문적인 상담을 무료로 제공하���, 필요한 경우 신청을 도와드립니다.',
      impact: '월평균 50건의 무료상담 진행'
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/volunteer/dementia-prevention.jpg',
      alt: '치매예방 프로그램',
      date: '2024.03.15',
      description: '관내 경로당에서 진행된 치매예방 프로그램'
    },
    {
      id: 2,
      src: '/images/volunteer/health-check.jpg',
      alt: '건강체크 봉사',
      date: '2024.03.10',
      description: '지역 어르신 건강체크 및 상담'
    },
    {
      id: 3,
      src: '/images/volunteer/care-service.jpg',
      alt: '방문요양 서비스',
      date: '2024.03.05',
      description: '독거어르신 가정방문 요양서비스'
    },
    {
      id: 4,
      src: '/images/volunteer/consultation.jpg',
      alt: '무료상담',
      date: '2024.03.01',
      description: '장기요양등급 신청 무료상담'
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">지역사회봉사</h1>

          {/* 봉사활동 소개 */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <Heart className="inline-block w-8 h-8 text-blue-600 mr-2" />
              힘찬홈케어의 지역사회 공헌
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              힘찬홈케어는 전문적인 요양서비스 제공과 더불어, 지역사회 내 도움이 필요한 어르신들을 위해 
              다양한 무료 봉사활동을 진행하고 있습니다. 우리의 전문성과 경험을 바탕으로 
              어르신들의 건강하고 행복한 노후를 위해 힘쓰고 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">무료 요양서비스</h3>
                <p className="text-gray-600 text-sm">경제적 어려움이 있는 어르신 대상</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">치매예방 교육</h3>
                <p className="text-gray-600 text-sm">지역 경로당 순회 프로그램 운영</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">전문 상담 지원</h3>
                <p className="text-gray-600 text-sm">요양보호 관련 무료 전문상담</p>
              </div>
            </div>
          </div>

          {/* 봉사활동 사진 갤러리 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Camera className="w-7 h-7 text-blue-600 mr-2" />
              봉사활동 현장
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium">{image.description}</p>
                      <p className="text-white/80 text-sm mt-1">{image.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 연락처 안내 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">봉의 안내</h2>
            <p className="text-gray-600 mb-4">
              지역사회 봉사활동과 관련하여 문의사항이 있으시면 아래 연락처로 연락 주시기 바랍니다.
              전문 상담사가 자세히 안내해 드리겠습니다.
            </p>
            <div className="flex items-center text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">031-912-1997</span>
            </div>
          </div>

          {/* 봉사활동 목록 */}
          <div className="grid gap-6">
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {activity.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {activity.frequency}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{activity.beneficiaries}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{activity.description}</p>

                <div className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-medium">{activity.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: string;
  image: string;
  description: string;
}

export default function Gallery() {
  const activities: Activity[] = [
    {
      id: 1,
      title: '어르신과 함께하는 봄맞이 나들이',
      date: '2024.03.15',
      location: '일산 호수공원',
      participants: '어르신 15명, 직원 8명',
      image: '/images/activities/spring-trip.jpg',
      description: '따뜻한 봄날, 어르신들과 함께 호수공원에서 즐거운 시간을 보냈습니다.'
    },
    {
      id: 2,
      title: '요양보호사 직무교육',
      date: '2024.03.10',
      location: '힘찬홈케어 교육실',
      participants: '요양보호사 25명',
      image: '/images/activities/training.jpg',
      description: '전문성 향상을 위한 요양보호사 정기 직무교육을 진행했습니다.'
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">활동소식</h1>

          <div className="grid gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-64 w-full object-cover md:w-96"
                      src={activity.image}
                      alt={activity.title}
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {activity.title}
                    </h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2" />
                        <span>{activity.participants}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {activity.description}
                    </p>

                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      자세히 보기
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                이전
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                다음
              </button>
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
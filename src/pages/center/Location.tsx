import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Bus, Train } from 'lucide-react';

export default function Location() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">오시는 길</h1>
          <p className="text-lg text-gray-600">힘찬홈케어 찾아오시는 방법을 안내해드립니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">주소</h3>
                  <p className="text-gray-600">경기 고양시 일산서구 일산로 517 뉴일산코아 110호</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">운영시간</h3>
                  <p className="text-gray-600">평일: 09:00 - 18:00</p>
                  <p className="text-gray-600">토요일: 09:00 - 13:00</p>
                  <p className="text-gray-600">일요일 및 공휴일: 휴무</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">연락처</h3>
                  <p className="text-gray-600">전화: 031-912-1997</p>
                  <p className="text-gray-600">휴대폰: 010-3890-3624</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">대중교통 이용안내</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Bus className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">버스</h4>
                    <p className="text-gray-600">88, 056, 700, 078, 010, 870, 1001번</p>
                    <p className="text-gray-600">일산3동 행정복지센터 하차</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Train className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">전철</h4>
                    <p className="text-gray-600">경의선 일산역 1번 출구에서 862m</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[600px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.8436916432386!2d126.76999631531291!3d37.68294297977001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c855df4445555%3A0x6d6c6d6c6d6c6d6c!2z7J207IKw66-86rWt7KCE7JWE!5e0!3m2!1sko!2skr!4v1620000000000!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
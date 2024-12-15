import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Bus, Train } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    naver: any;
  }
}

const COORDINATES = {
  lat: 37.6764273,
  lng: 126.7700057
};

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(COORDINATES.lat, COORDINATES.lng),
        zoom: 17,
      };
      const map = new window.naver.maps.Map('contact-map', mapOptions);
      
      // 마커 추가
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(COORDINATES.lat, COORDINATES.lng),
        map: map
      });

      // 정보창 추가
      const infoWindow = new window.naver.maps.InfoWindow({
        content: '<div style="padding:10px;min-width:200px;line-height:150%;">' +
                '<h4 style="margin-top:5px;">힘찬홈케어</h4>' +
                '<p>경기 고양시 일산서구 일산로 517<br>뉴일산코아 109호</p>' +
                '</div>'
      });

      // 마커 클릭시 정보창 표시
      window.naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });
    };
    document.head.appendChild(script);

    return () => {
      const scriptElement = document.querySelector(`script[src^="https://openapi.map.naver.com"]`);
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 tracking-wider">찾아오시는 길</h2>
            <div className="mt-8 space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <MapPin className="h-6 w-6 text-rose-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">주소</h3>
                  <p className="mt-1 text-gray-600 tracking-wide leading-relaxed">
                    경기 고양시 일산서구 일산로 517 뉴일산코아 109호
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <Clock className="h-6 w-6 text-rose-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">영업시간</h3>
                  <p className="mt-1 text-gray-600 tracking-wide leading-relaxed">매일 운영 (22:00 종료)</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <Phone className="h-6 w-6 text-rose-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">연락처</h3>
                  <p className="mt-1 text-gray-600 tracking-wide leading-relaxed">031-912-1997</p>
                  <p className="text-gray-600 tracking-wide leading-relaxed">010-3890-3624</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 tracking-wide">교통편</h3>
              <div className="mt-4 space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <Bus className="h-5 w-5 text-rose-600" />
                  <p className="ml-2 text-gray-600 tracking-wide leading-relaxed">
                    88, 056, 700, 078, 010, 870, 1001번 - 일산3동 행정복지센터 하차
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <Train className="h-5 w-5 text-rose-600" />
                  <p className="ml-2 text-gray-600 tracking-wide leading-relaxed">
                    경의선 일산역 1번 출구에서 862m
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-lg p-6"
          >
            <div id="contact-map" className="w-full h-[450px] rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
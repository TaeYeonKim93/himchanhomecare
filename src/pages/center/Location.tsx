import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Bus, Train } from 'lucide-react';

declare global {
  interface Window {
    naver: any;
  }
}

const COORDINATES = {
  lat: 37.6764273,
  lng: 126.7700057
};

export default function Location() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(COORDINATES.lat, COORDINATES.lng),
        zoom: 17,
      };
      const map = new window.naver.maps.Map('map', mapOptions);
      
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
                  <p className="text-gray-600">경기 고양시 일산서구 일산로 517 뉴일산코아 109호</p>
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
            <div id="map" className="w-full h-full"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
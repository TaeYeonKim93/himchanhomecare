import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HandHeart, Bath, FileQuestion } from 'lucide-react';
import ServiceModal from './ServiceModal';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: '방문요양',
    shortDescription: '전문 요양보호사가 어르신의 가정을 방문하여 신체활동 및 일상생활을 지원합니다.',
    icon: HandHeart,
    link: '',
    content: {
      description: '노인장기요양보험 등급을 받은 어르신의 가정을 방문하여 신체활동 및 일상생활 지원 등의 요양서비스를 제공합니다.',
      pricing: {
        title: '2025년 방문요양 수가',
        details: [
          { time: '30분', price: '16,940원', copay: '2,541원' },
          { time: '60분', price: '24,580원', copay: '3,687원' },
          { time: '90분', price: '33,120원', copay: '4,968원' },
          { time: '120분', price: '42,160원', copay: '6,324원' },
          { time: '150분', price: '49,160원', copay: '7,374원' },
          { time: '180분', price: '55,350원', copay: '8,303원' },
          { time: '210분', price: '61,670원', copay: '9,251원' },
          { time: '240분', price: '68,030원', copay: '10,205원' }
        ],
        note: '* 본인부담금은 15%입니다.\n* 감경대상자는 본인부담금 감경 가능\n* 등급별 월 한도액: 1등급 2,306,400원, 2등급 2,083,400원, 3등급 1,485,700원, 4등급 1,370,600원, 5등급 1,177,000원'
      },
      details: [
        '신체활동 지원: 세면, 구강관리, 머리감기, 몸단장, 옷 갈아입히기, 목욕, 식사도움, 체위변경, 이동도움, 신체기능의 유지와 증진을 위한 활동 등',
        '일상생활 지원: 취사, 생활필수품 구매, 청소, 세탁 등',
        '정서지원 및 건강관리: 말벗, 격려와 위로, 생활상담, 의료기관 이용 동행, 처방약 복용 관리 등'
      ]
    }
  },
  {
    title: '방문목욕',
    shortDescription: '안전하고 편안한 목욕 서비스를 제공합니다.',
    icon: Bath,
    link: '',
    content: {
      description: '거동이 불편한 어르신의 가정을 방문해 전문적인 목욕 서비스를 제공합니다.',
      pricing: {
        title: '2025년 방문목욕 수가',
        details: [
          { type: '차량이용(차량 내)', price: '86,480원', copay: '12,972원' },
          { type: '차량이용(가정 내)', price: '77,970원', copay: '11,696원' },
          { type: '차량미이용', price: '48,690원', copay: '7,304원' }
        ],
        note: '* 본인부담금은 15%입니다.\n* 감경대상자는 본인부담금 감경 가능\n* 월 4회까지 이용 가능'
      },
      details: [
        '목욕 전 건강상태 체크',
        '전문 요양보호사 2인 1조 서비스 제공',
        '안전하고 편안한 목욕 도움',
        '깨끗한 옷 갈아입히기',
        '서비스 완료 후 건강상태 체크'
      ]
    }
  },
  {
    title: '무료등급신청대행',
    shortDescription: '장기요양등급 신청부터 판정까지 무료로 도와드립니다.',
    icon: FileQuestion,
    link: '/application/free',
    content: {
      description: '노인장기요양보험 등급 신청에 필요한 모든 절차를 전문가가 무료로 도와드립니다.',
      details: [
        '장기요양인정 신청서 작성 지원',
        '의사소견서 발급 병원 안내 및 동행',
        '등급판정 결과 안내',
        '급여이용계획서 작성 지원',
        '장기요양기관 정보 제공'
      ],
      process: [
        '1단계: 상담신청 및 방문상담',
        '2단계: 신청서류 준비 및 접수',
        '3단계: 의사소견서 발급',
        '4단계: 등급판정위원회 심사',
        '5단계: 결과통보 및 안내'
      ],
      requirements: [
        '65세 이상 노인 또는 65세 미만으로 노인성 질환이 있는 자',
        '건강보험가입자 또는 피부양자',
        '의사소견서',
        '신청자 신분증'
      ]
    }
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.link) {
      navigate(service.link);
    } else {
      setSelectedService(service);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">서비스 안내</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.shortDescription}
              </p>
              <div className="mt-4 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  자세히 보기
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
        />
      )}
    </section>
  );
}
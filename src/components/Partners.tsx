import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: '노인장기요양보험',
    logo: 'https://hsyyw.gabia.io/data/file/w0_1/thumb-1890442146_hKiVodx1_ccb03f68abc934d57e175da599791f71aff3d123_175x40.jpg',
    url: 'https://www.longtermcare.or.kr/npbs/indexr.jsp'
  },
  {
    name: '고양시',
    logo: 'https://hsyyw.gabia.io/data/file/w0_1/thumb-1890442146_maou5H8f_58df75068220d37b8b4f836c9dc21b43105eaea1_175x40.jpg',
    url: 'http://www.goyang.go.kr/index.do'
  },
  {
    name: '국민건강보험',
    logo: 'https://hsyyw.gabia.io/data/file/w0_1/thumb-1890442146_7aOZ6ugP_9f8c03e5042d69c4a3f271bcfe3d9967d318adc7_175x40.jpg',
    url: 'https://www.nhis.or.kr/nhis/index.do'
  },
  {
    name: '이지케어',
    logo: 'https://ezcare.easyms.co.kr/homepage/images/common/logo.png',
    url: 'https://ezcare.easyms.co.kr/'
  },
  {
    name: '고양시자원봉사센터',
    logo: 'https://hsyyw.gabia.io/data/file/w0_1/thumb-1890442146_2arCZcIX_6b7a9cda99d05003fdaa90423e8aa6e820710c0c_175x40.jpg',
    url: 'https://www.gy1365.or.kr/'
  }
];

export default function Partners() {
  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:container lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">협력기관</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block w-40 h-16 relative transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
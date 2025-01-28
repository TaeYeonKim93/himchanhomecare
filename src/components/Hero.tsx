import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    url: "/images/image_fx_2.jpg",
    alt: "가족과 함께하는 행복한 시간"
  },
  {
    url: "/images/image_fx_3.jpg",
    alt: "봄날의 산책"
  },
  {
    url: "/images/image_fx_6.jpg",
    alt: "따뜻한 돌봄 서비스"
  }
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full object-cover"
            src={images[currentImage].url}
            alt={images[currentImage].alt}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gray-500 mix-blend-multiply opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="hero-title text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            어르신을 내 부모님같이 모시겠습니다
          </h1>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center justify-center space-x-6 px-4"
          >
            <p className="text-2xl text-white font-bold tracking-wider leading-relaxed">
              전국 재가 장기요양기관 <br className="lg:hidden"/>평가 최우수기관<br className="lg:hidden"/> (연속 A등급)
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
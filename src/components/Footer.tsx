import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          <div className="flex items-center justify-center">
            <img
              src="/images/logo.svg"
              alt="힘찬홈케어 로고"
              className="h-8 w-auto"
            />
            <span className="ml-3 text-2xl font-bold text-gray-900">힘찬홈케어</span>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>031-912-1997</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>ycs4218@hanmail.net</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-center">경기 고양시 일산서구 일산로 517 뉴일산코아 109호</span>
              </div>
              <div className="text-gray-600">
                대표: 양창숙
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500"
          >
            © {new Date().getFullYear()} 힘찬홈케어. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
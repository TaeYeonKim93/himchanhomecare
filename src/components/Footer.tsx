import React from 'react';
import { Building2, User, FileText, MapPin, Phone, Printer, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="힘찬홈케어 로고"
                className="h-8 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900">힘찬홈케어</span>
            </div>
            <p className="text-gray-600 font-medium text-lg">어르신을 내 부모님같이 모시겠습니다</p>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-wrap justify-center items-center gap-2 text-gray-600 text-sm">
              <span className="flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                힘찬홈케어
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                대표: 양창숙
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                고유번호: 884-80-00259
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                경기 고양시 일산서구 일산로 517 뉴일산코아 109호
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                Tel: 031-912-1997
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <Printer className="h-4 w-4 mr-1" />
                Fax: 031-912-1998
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                Email: ycs4218@hanmail.net
              </span>
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
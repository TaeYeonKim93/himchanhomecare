import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import ConsultModal from './ConsultModal';

const menuItems = [
  {
    title: '센터소개',
    link: '/center',
    submenu: [
      { title: '센터소개', link: '/center' },
      { title: '인사말', link: '/center/greeting' },
      { title: '오시는길', link: '/center/location' },
      { title: '상담문의', link: '/center/contact' }
    ]
  },
  {
    title: '서비스소개',
    link: '/services',
    submenu: [
      { title: '노인장기요양제도', link: '/services/long-term-care' },
      { title: '방문요양서비스', link: '/services/home-care' },
      { title: '방문목욕서비스', link: '/services/bath-service' },
      { title: '서비스소개', link: '/services/intro' }
    ]
  },
  {
    title: '무료등급신청대행',
    link: '/application/free',
    submenu: null
  },
  {
    title: '커뮤니티',
    link: '/community',
    submenu: [
      { title: '센터소식', link: '/news' },
      { title: '힘찬 사진첩', link: '/gallery' },
      { title: '문의하기', link: '/inquiry' },
      { title: '요양보호사구인구직', link: '/jobs' },
      { title: '공지사항', link: '/community' },
      { title: '활동소식', link: '/community' },
      { title: '갤러리', link: '/community' },
      { title: '자유게시판', link: '/community' }
    ]
  },
  {
    title: '후원&봉사',
    link: '/support',
    submenu: [
      { title: '후원안내', link: '/donation' },
      { title: '봉사안내', link: '/volunteer' },
      { title: '후원안내', link: '/support' },
      { title: '자원봉사', link: '/support' }
    ]
  }
];

function SubMenu({ items, isVisible }: { items: any[]; isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div
      className="absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden"
      style={{ top: 'calc(100% - 0.5rem)' }}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultType, setConsultType] = useState<'phone' | 'kakao'>('phone');
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const handleConsult = (type: 'phone' | 'kakao') => {
    setConsultType(type);
    setShowConsultModal(true);
  };

  const getTextColor = () => {
    if (isMainPage) {
      return isScrolled ? 'text-gray-800' : 'text-white';
    }
    return 'text-gray-800';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || !isMainPage ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-12 w-12" />
              <span className={`text-2xl font-bold ${getTextColor()}`}>
                힘찬홈케어
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-8">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative">
                      <Link
                        to={item.link}
                        className={`${getTextColor()} hover:text-blue-600 px-3 py-2 text-lg font-medium tracking-wide inline-block`}
                      >
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <div className="absolute h-8 w-full" style={{ top: '100%' }}></div>
                      )}
                    </div>
                    {item.submenu && activeMenu === index && (
                      <SubMenu items={item.submenu} isVisible={true} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex space-x-2 ml-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleConsult('phone')}
                  className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm"
                >
                  상담
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleConsult('kakao')}
                  className="bg-yellow-400 text-black px-3 py-1.5 rounded-md hover:bg-yellow-500 text-sm"
                >
                  카톡
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${getTextColor()} hover:text-blue-600`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="flex space-x-2 px-3 py-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleConsult('phone');
                      setIsOpen(false);
                    }}
                    className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 text-sm"
                  >
                    상담
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleConsult('kakao');
                      setIsOpen(false);
                    }}
                    className="flex-1 bg-yellow-400 text-black px-3 py-2 rounded-md hover:bg-yellow-500 text-sm"
                  >
                    카톡
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ConsultModal
        isOpen={showConsultModal}
        onClose={() => setShowConsultModal(false)}
        type={consultType}
      />
    </>
  );
}
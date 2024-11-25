import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import ConsultModal from './ConsultModal';

const menuItems = [
  {
    title: '센터소개',
    link: '/center',
    submenu: [
      { title: '센터소개', link: '/center' },
      { title: '인사말', link: '/greeting' },
      { title: '오시는길', link: '/location' }
    ]
  },
  {
    title: '서비스소개',
    link: '/services',
    submenu: [
      { title: '노인장기요양제도', link: '/long-term-care' },
      { title: '방문요양서비스', link: '/home-care' },
      { title: '방문목욕서비스', link: '/bath-service' }
    ]
  },
  {
    title: '무료등급신청대행',
    link: '/free-application',
    submenu: null
  },
  {
    title: '커뮤니티',
    link: '/community',
    submenu: [
      { title: '센터소식', link: '/news' },
      { title: '힘찬 사진첩', link: '/gallery' },
      { title: '문의하기', link: '/inquiry' },
      { title: '요양보호사구인구직', link: '/jobs' }
    ]
  },
  {
    title: '후원&봉사',
    link: '/support',
    submenu: [
      { title: '후원안내', link: '/donation' },
      { title: '봉사안내', link: '/volunteer' }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultType, setConsultType] = useState<'phone' | 'kakao'>('phone');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const menuRef = useRef<HTMLDivElement>(null);
  //test

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsult = (type: 'phone' | 'kakao') => {
    setConsultType(type);
    setShowConsultModal(true);
  };

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const SubMenu = ({ items, isVisible }: { items: any[]; isVisible: boolean }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-1">
            {items.map((subItem, idx) => (
              <Link
                key={idx}
                to={subItem.link}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-12 w-12" />
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>힘찬홈케어</span>
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
                    <Link
                      to={item.link}
                      className={`${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      } hover:text-blue-600 px-3 py-2 text-lg font-medium tracking-wide`}
                    >
                      {item.title}
                    </Link>
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
                className={`${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-600`}
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.link}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            to={subitem.link}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  X,
  ShoppingCart,
  Phone,
  MapPin,
  Search,
  User,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const menuItems = [
    { name: 'Главная', href: '/' },
    { name: 'Категории', href: '/categories' },
    { name: 'Товары', href: '/products' },
    { name: 'О компании', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <>
      {/* Верхняя информационная полоса */}
      <div className="hidden lg:block bg-gradient-to-r from-[#00205B] to-[#1a3a6b] text-white py-3 relative overflow-hidden">
        {/* Декоративный фон */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <Link
                href="tel:+79781234567"
                className="flex items-center space-x-2 hover:text-[#F6A800] transition-all duration-300 group"
              >
                <div className="p-1 bg-[#F6A800]/20 rounded-full group-hover:bg-[#F6A800]/30 transition-colors">
                  <Phone size={14} />
                </div>
                <span className="font-medium">+7 (978) 123-45-67</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 hover:text-[#F6A800] transition-all duration-300 group"
              >
                <div className="p-1 bg-[#F6A800]/20 rounded-full group-hover:bg-[#F6A800]/30 transition-colors">
                  <MapPin size={14} />
                </div>
                <span className="font-medium">
                  Симферополь, ул. Примерная, 1
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-300">
                <span className="text-[#F6A800] font-semibold">Работаем:</span>{' '}
                9:00 - 18:00
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <Link
                href="#"
                className="text-sm hover:text-[#F6A800] transition-colors font-medium"
              >
                Заказать звонок
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Основной header */}
      <motion.header
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-2xl shadow-blue-900/10 border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div
                className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <Image
                  src="https://crimea-doorhan.ru/local/templates/skd/images/logo.svg"
                  alt="DoorHan Крым"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-[#00205B] font-montserrat group-hover:text-[#F6A800] transition-colors">
                  DoorHan Крым
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Ворота и автоматика
                </p>
              </div>
            </Link>

            {/* Навигация */}
            <nav className="hidden max-[1100px]:hidden min-[1100px]:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-[#00205B] font-medium transition-all duration-300 rounded-lg group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F6A800]/10 to-[#F6A800]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center space-x-2">
              {/* Поиск */}
              <motion.button
                className="hidden md:flex items-center justify-center w-11 h-11 text-gray-600 hover:text-[#F6A800] hover:bg-gray-50 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={18} />
              </motion.button>

              {/* Профиль */}
              <motion.button
                className="hidden md:flex items-center justify-center w-11 h-11 text-gray-600 hover:text-[#F6A800] hover:bg-gray-50 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={18} />
              </motion.button>

              {/* CTA кнопка */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden min-[1100px]:block"
              >
                <Link
                  href="/categories"
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#F6A800] to-[#ffb700] hover:from-[#ffb700] hover:to-[#F6A800] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <ShoppingCart size={18} className="relative z-10" />
                  <span className="relative z-10 hidden md:inline">
                    Каталог
                  </span>
                </Link>
              </motion.div>

              {/* Мобильная кнопка меню */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="min-[1100px]:hidden p-2 text-gray-700 hover:text-[#00205B] hover:bg-gray-50 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="min-[1100px]:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 max-w-7xl">
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-gray-700 hover:text-[#00205B] hover:bg-gray-50 font-medium rounded-lg transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        href="/categories"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#F6A800] to-[#ffb700] hover:from-[#ffb700] hover:to-[#F6A800] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ShoppingCart size={20} />
                        <span>Каталог товаров</span>
                      </Link>
                    </motion.div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

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
        setIsScrolled(window.scrollY > 20);
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
      <div className="hidden lg:block bg-[#00205B] text-white py-2">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <Link
                href="tel:+79781234567"
                className="flex items-center space-x-2 hover:text-[#F6A800] transition-colors"
              >
                <Phone size={16} />
                <span>+7 (978) 123-45-67</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 hover:text-[#F6A800] transition-colors"
              >
                <MapPin size={16} />
                <span>Симферополь, ул. Примерная, 1</span>
              </Link>
            </div>
            <div className="text-sm text-gray-300">
              Работаем с 9:00 до 18:00
            </div>
          </div>
        </div>
      </div>

      {/* Основной header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="https://crimea-doorhan.ru/local/templates/skd/images/logo.svg"
                  alt="DoorHan Крым"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#00205B] font-montserrat group-hover:text-[#F6A800] transition-colors">
                  DoorHan Крым
                </h1>
                <p className="text-xs text-gray-600">Ворота и роллеты</p>
              </div>
            </Link>

            {/* Навигация */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-[#F6A800] font-medium transition-colors duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F6A800] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center space-x-3">
              {/* Поиск */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-[#F6A800] hover:bg-gray-100 rounded-lg transition-all duration-300">
                <Search size={20} />
              </button>

              {/* Профиль */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-[#F6A800] hover:bg-gray-100 rounded-lg transition-all duration-300">
                <User size={20} />
              </button>

              {/* CTA кнопка */}
              <Link
                href="/categories"
                className="hidden sm:flex items-center space-x-2 bg-[#F6A800] hover:bg-[#ffb700] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ShoppingCart size={18} />
                <span className="hidden md:inline">Магазин</span>
              </Link>

              {/* Мобильная кнопка меню */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#00205B] hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
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
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 max-w-7xl">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-700 hover:text-[#00205B] font-medium py-2 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/categories"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center space-x-2 bg-[#F6A800] hover:bg-[#ffb700] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      <ShoppingCart size={20} />
                      <span>Интернет-магазин</span>
                    </Link>
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

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Settings,
  Zap,
  Lock,
  Star,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: 'Секционные ворота',
      description:
        'Современные секционные ворота с отличной теплоизоляцией и надежной конструкцией.',
      image: '/images/sectional-gates.jpg',
      features: ['Теплоизоляция', 'Автоматика', 'Гарантия 5 лет'],
      price: 'от 45 000 ₽',
      category: 'Ворота',
      icon: Shield,
      color: 'bg-[#00205B]',
      hoverColor: 'hover:bg-[#00153E]',
    },
    {
      id: 2,
      title: 'Роллетные системы',
      description:
        'Защитные роллеты для окон и дверей с высоким уровнем безопасности.',
      image: '/images/roller-shutters.jpg',
      features: ['Безопасность', 'Шумоизоляция', 'Энергосбережение'],
      price: 'от 25 000 ₽',
      category: 'Роллеты',
      icon: Lock,
      color: 'bg-[#F6A800]',
      hoverColor: 'hover:bg-[#ffb700]',
    },
    {
      id: 3,
      title: 'Автоматические ворота',
      description:
        'Умные ворота с дистанционным управлением и системами безопасности.',
      image: '/images/automatic-gates.jpg',
      features: ['Дистанционное управление', 'Безопасность', 'Умный дом'],
      price: 'от 65 000 ₽',
      category: 'Автоматика',
      icon: Settings,
      color: 'bg-[#00205B]',
      hoverColor: 'hover:bg-[#00153E]',
    },
    {
      id: 4,
      title: 'Распашные ворота',
      description:
        'Классические распашные ворота с современным дизайном и надежностью.',
      image: '/images/swing-gates.jpg',
      features: ['Классический дизайн', 'Прочность', 'Легкость установки'],
      price: 'от 35 000 ₽',
      category: 'Ворота',
      icon: Shield,
      color: 'bg-[#F6A800]',
      hoverColor: 'hover:bg-[#ffb700]',
    },
    {
      id: 5,
      title: 'Складные ворота',
      description: 'Компактные складные ворота для ограниченного пространства.',
      image: '/images/folding-gates.jpg',
      features: ['Компактность', 'Экономия места', 'Быстрое открытие'],
      price: 'от 40 000 ₽',
      category: 'Ворота',
      icon: Zap,
      color: 'bg-[#00205B]',
      hoverColor: 'hover:bg-[#00153E]',
    },
    {
      id: 6,
      title: 'Системы управления',
      description: 'Современные системы управления воротами и автоматикой.',
      image: '/images/control-systems.jpg',
      features: ['Умное управление', 'Интеграция', 'Мониторинг'],
      price: 'от 15 000 ₽',
      category: 'Автоматика',
      icon: Settings,
      color: 'bg-[#F6A800]',
      hoverColor: 'hover:bg-[#ffb700]',
    },
  ];

  const categories = [
    { name: 'Все', count: products.length },
    {
      name: 'Ворота',
      count: products.filter((p) => p.category === 'Ворота').length,
    },
    {
      name: 'Роллеты',
      count: products.filter((p) => p.category === 'Роллеты').length,
    },
    {
      name: 'Автоматика',
      count: products.filter((p) => p.category === 'Автоматика').length,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00205B] font-montserrat mb-6">
            Наша продукция
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Широкий ассортимент качественных ворот, роллет и автоматических
            систем
          </p>

          {/* Категории */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gray-100 hover:bg-[#00205B] hover:text-white text-gray-700 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Сетка продуктов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#F6A800]/20"
            >
              {/* Изображение продукта */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00205B]/20 to-[#F6A800]/20 z-10"></div>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <product.icon className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 text-[#00205B] px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <Star
                      className="w-5 h-5 text-[#F6A800]"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              {/* Контент карточки */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#00205B] mb-3 font-montserrat group-hover:text-[#F6A800] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Особенности */}
                <div className="mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <CheckCircle className="w-4 h-4 text-[#F6A800] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Цена и кнопка */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#00205B] font-montserrat">
                      {product.price}
                    </span>
                  </div>
                  <Link
                    href="/categories"
                    className={`group/btn ${product.color} ${product.hoverColor} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105`}
                  >
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover эффект */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F6A800]/5 to-[#00205B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA секция */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#00205B] to-[#00153E] rounded-3xl p-8 md:p-16 text-white">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
              Нужна консультация?
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальное решение для вашего
              объекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacts"
                className="bg-[#F6A800] hover:bg-[#ffb700] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Получить консультацию</span>
                <ExternalLink size={20} />
              </Link>
              <Link
                href="/categories"
                className="border-2 border-white hover:bg-white hover:text-[#00205B] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Интернет-магазин</span>
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;

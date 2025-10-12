'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
} from 'lucide-react';

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (978) 123-45-67',
      description: 'Звонки принимаются ежедневно',
      href: 'tel:+79781234567',
      color: 'bg-[#F6A800]',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@crimea-doorhan.ru',
      description: 'Ответим в течение часа',
      href: 'mailto:info@crimea-doorhan.ru',
      color: 'bg-[#00205B]',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'Симферополь, ул. Примерная, 1',
      description: 'Офис и выставочный зал',
      href: '#',
      color: 'bg-[#F6A800]',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00-18:00, Сб: 9:00-15:00',
      description: 'Воскресенье - выходной',
      href: '#',
      color: 'bg-[#00205B]',
    },
  ];

  const services = [
    {
      icon: MessageCircle,
      title: 'Консультация',
      description: 'Поможем выбрать оптимальное решение',
      time: '5-10 минут',
    },
    {
      icon: Calendar,
      title: 'Выезд замерщика',
      description: 'Бесплатный выезд в удобное время',
      time: '30-60 минут',
    },
    {
      icon: CheckCircle,
      title: 'Расчет стоимости',
      description: 'Детальный расчет с учетом всех нюансов',
      time: '1-2 часа',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contacts" className="pt-12 pb-8 md:py-20 bg-white">
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
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Готовы ответить на все ваши вопросы и помочь с выбором оптимального
            решения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Контактная информация */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#00205B] font-montserrat mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={contact.href}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300 group"
                  >
                    <div
                      className={`p-3 ${contact.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#00205B] mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-gray-700 font-medium mb-1">
                        {contact.content}
                      </p>
                      <p className="text-sm text-gray-500">
                        {contact.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Услуги */}
            <div>
              <h3 className="text-2xl font-bold text-[#00205B] font-montserrat mb-6">
                Наши услуги
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#F6A800]/5 to-[#00205B]/5 rounded-2xl"
                  >
                    <div className="p-2 bg-[#F6A800]/10 rounded-lg">
                      <service.icon className="w-5 h-5 text-[#F6A800]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#00205B] mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {service.description}
                      </p>
                      <p className="text-xs text-[#F6A800] font-medium">
                        {service.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00205B] to-[#00153E] rounded-3xl p-12 text-white"
          >
            <h3 className="text-2xl font-bold font-montserrat mb-6">
              Оставить заявку
            </h3>
            <p className="text-gray-200 mb-8">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-[#F6A800] mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Заявка отправлена!
                </h4>
                <p className="text-gray-200">
                  Мы свяжемся с вами в течение 15 минут
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6A800] focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6A800] focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6A800] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6A800] focus:border-transparent resize-none"
                    placeholder="Опишите ваши потребности..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F6A800] hover:bg-[#ffb700] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Send size={20} />
                  <span>Отправить заявку</span>
                </button>

                <p className="text-xs text-gray-300 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Карта (заглушка) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-[#00205B] font-montserrat text-center mb-8">
            Как нас найти
          </h3>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 p-8 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#F6A800] mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-[#00205B] mb-2">
                Симферополь, ул. Примерная, 1
              </h4>
              <p className="text-gray-600">
                Офис и выставочный зал DoorHan Крым
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSection;

# 🚪 DoorHan Крым - Интернет-магазин ворот и автоматики

![DoorHan Logo](https://img.shields.io/badge/DoorHan-Крым-00205B?style=for-the-badge&logo=door&logoColor=F6A800)

Современный веб-сайт для компании DoorHan в Крыму, специализирующейся на продаже и установке ворот, роллет и автоматических систем.

## 📋 Содержание

- [О проекте](#о-проекте)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Установка и запуск](#установка-и-запуск)
- [API Документация](#api-документация)
- [Компоненты](#компоненты)
- [Развертывание](#развертывание)
- [Команда](#команда)
- [Лицензия](#лицензия)

## 🎯 О проекте

**DoorHan Крым** - это полнофункциональный интернет-магазин, созданный для компании DoorHan в Крыму. Проект предоставляет современный пользовательский интерфейс для просмотра каталога товаров, оформления заказов и получения консультаций.

### ✨ Основные возможности

- 🛍️ **Каталог товаров** с фильтрацией и поиском
- 🏷️ **Категории товаров** с подробными описаниями
- 🛒 **Корзина покупок** с управлением количеством
- 📦 **Система заказов** с отслеживанием статуса
- 👤 **Профили пользователей** и аутентификация
- 📝 **Контактные формы** и обратные звонки
- 📊 **Административная панель** для управления
- 📱 **Адаптивный дизайн** для всех устройств
- ⚡ **Высокая производительность** с SSR/SSG

### 🎨 Дизайн

- **Цветовая схема**: Корпоративные цвета DoorHan (#00205B, #F6A800)
- **Стиль**: Современный, минималистичный дизайн
- **Анимации**: Плавные переходы с Framer Motion
- **Типографика**: Читаемые шрифты с хорошей иерархией

## 🛠 Технологии

### Frontend
- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Статическая типизация
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Framer Motion** - Анимации и переходы
- **Lucide React** - Иконки
- **React Hook Form** - Управление формами
- **Zustand** - Управление состоянием

### Backend (планируется)
- **Node.js** - Серверная платформа
- **Express.js** - Веб-фреймворк
- **PostgreSQL** - База данных
- **Prisma** - ORM
- **JWT** - Аутентификация
- **Stripe** - Платежная система

### DevOps
- **Vercel** - Хостинг и деплой
- **GitHub Actions** - CI/CD
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование кода

## 📁 Структура проекта

```
doorhan-crimea-1/
├── 📁 public/                 # Статические файлы
│   ├── images/               # Изображения
│   ├── icons/                # Иконки
│   └── favicon.ico           # Фавикон
│
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📁 [page-product]/ # Динамические страницы товаров
│   │   ├── 📁 categories/    # Страница категорий
│   │   ├── 📁 products/      # Страница товаров
│   │   ├── layout.tsx        # Основной лейаут
│   │   ├── page.tsx          # Главная страница
│   │   ├── globals.css       # Глобальные стили
│   │   └── sitemap.ts        # Карта сайта
│   │
│   ├── 📁 components/        # React компоненты
│   │   ├── 📁 examples/      # Примеры использования API
│   │   ├── AboutSection.tsx  # Секция "О компании"
│   │   ├── CategoriesGrid.tsx # Сетка категорий
│   │   ├── ContactsSection.tsx # Секция контактов
│   │   ├── Footer.tsx        # Подвал сайта
│   │   ├── Header.tsx        # Шапка сайта
│   │   ├── HeroSection.tsx   # Главная секция
│   │   ├── ProductGrid.tsx   # Сетка товаров
│   │   ├── ProductsList.tsx  # Список товаров
│   │   └── StatsSection.tsx  # Секция статистики
│   │
│   ├── 📁 lib/               # Утилиты и конфигурация
│   │   ├── api.ts            # API клиент
│   │   └── utils.ts          # Общие утилиты
│   │
│   └── 📁 types/             # TypeScript типы
│       └── index.ts          # Основные типы
│
├── 📄 package.json           # Зависимости проекта
├── 📄 tailwind.config.js     # Конфигурация Tailwind
├── 📄 tsconfig.json          # Конфигурация TypeScript
├── 📄 next.config.ts         # Конфигурация Next.js
├── 📄 eslint.config.mjs      # Конфигурация ESLint
├── 📄 API_DOCUMENTATION.md   # Документация API
└── 📄 README.md              # Документация проекта
```

## 🚀 Установка и запуск

### Предварительные требования

- **Node.js** 18.17 или выше
- **npm** 9.0 или выше
- **Git** для клонирования репозитория

### 1. Клонирование репозитория

```bash
git clone https://github.com/Grangy/doorhanbg.git
cd doorhan-crimea-1
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Database (для бэкенда)
DATABASE_URL="postgresql://username:password@localhost:5432/doorhan_crimea"

# JWT Secret (для бэкенда)
JWT_SECRET=your-super-secret-jwt-key

# Payment (для бэкенда)
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 4. Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 5. Сборка для продакшена

```bash
npm run build
npm start
```

### Доступные скрипты

```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен версии
npm run lint         # Проверка кода линтером
npm run lint:fix     # Автоматическое исправление ошибок
npm run type-check   # Проверка типов TypeScript
```

## 📚 API Документация

Полная документация API находится в файле [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).

### Основные endpoints:

```typescript
// Категории
GET    /api/categories           # Получить все категории
GET    /api/categories/:id       # Получить категорию по ID

// Товары
GET    /api/products             # Получить товары с фильтрацией
GET    /api/products/:id         # Получить товар по ID
GET    /api/products/search      # Поиск товаров

// Корзина
GET    /api/cart                 # Получить корзину
POST   /api/cart                 # Добавить товар в корзину
PUT    /api/cart/:id             # Обновить товар в корзине
DELETE /api/cart/:id             # Удалить товар из корзины

// Заказы
POST   /api/orders               # Создать заказ
GET    /api/orders               # Получить заказы пользователя
GET    /api/orders/:id           # Получить заказ по ID

// Аутентификация
POST   /api/auth/login           # Вход в систему
POST   /api/auth/register        # Регистрация
POST   /api/auth/logout          # Выход
GET    /api/auth/me              # Текущий пользователь

// Формы
POST   /api/contact              # Контактная форма
POST   /api/callback             # Заказ обратного звонка
```

### Примеры использования API:

```typescript
import { apiClient } from '@/lib/api';

// Получение категорий
const categories = await apiClient.getCategories();

// Получение товаров с фильтрацией
const products = await apiClient.getProducts({
  category: 'home',
  minPrice: 10000,
  maxPrice: 100000,
  sortBy: 'price',
  sortOrder: 'asc'
});

// Добавление в корзину
await apiClient.addToCart({
  productId: 1,
  quantity: 2,
  selectedColor: 'blue'
});
```

## 🧩 Компоненты

### Основные компоненты:

#### 🏠 **HeroSection**
Главная секция с призывом к действию и основными преимуществами.

```typescript
<HeroSection 
  title="Ворота и автоматика DoorHan в Крыму"
  subtitle="Качественные решения для вашего дома и бизнеса"
  backgroundImage="/images/hero-bg.jpg"
/>
```

#### 🏷️ **CategoriesGrid**
Сетка категорий товаров с анимациями.

```typescript
<CategoriesGrid />
```

#### 🛍️ **ProductGrid**
Сетка товаров с фильтрацией и сортировкой.

```typescript
<ProductGrid 
  products={products}
  onProductClick={handleProductClick}
/>
```

#### 📝 **ContactsSection**
Секция с контактной информацией и формой.

```typescript
<ContactsSection 
  phone="+7 (978) 123-45-67"
  email="info@doorhan-crimea.ru"
  address="Симферополь, ул. Ленина, 10"
/>
```

### Примеры использования API:

В папке `src/components/examples/` находятся рабочие примеры:

- **CategoriesGridWithAPI** - Загрузка категорий через API
- **ProductsListWithReactQuery** - Список товаров с фильтрацией
- **ProductCard** - Карточка товара с добавлением в корзину
- **CartWithAPI** - Корзина покупок
- **ContactFormWithAPI** - Контактная форма

## 🎨 Стилизация

Проект использует **Tailwind CSS** с кастомной конфигурацией:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          500: '#00205B',  // Основной синий
          600: '#00153E',  // Темно-синий
        },
        secondary: {
          400: '#F6A800',  // Золотой
          500: '#ffb700',  // Ярко-золотой
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    }
  }
}
```

### Кастомные классы:

```css
/* globals.css */
.shadow-soft {
  box-shadow: 0 4px 20px rgba(0, 32, 91, 0.1);
}

.gradient-primary {
  background: linear-gradient(135deg, #00205B 0%, #00153E 100%);
}
```

## 📱 Адаптивность

Проект полностью адаптивен и оптимизирован для всех устройств:

- **Mobile First** подход
- **Breakpoints**: 640px, 768px, 1024px, 1280px
- **Touch-friendly** интерфейс
- **Оптимизированные изображения**

## 🚀 Развертывание

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой происходит автоматически при push в main

```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Сборка и запуск
docker build -t doorhan-crimea .
docker run -p 3000:3000 doorhan-crimea
```

## 🧪 Тестирование

```bash
# Запуск тестов
npm test

# Тесты с покрытием
npm run test:coverage

# E2E тесты
npm run test:e2e
```

## 📊 Производительность

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Все метрики в зеленой зоне
- **Bundle Size**: Оптимизирован с помощью Next.js
- **Image Optimization**: Автоматическая оптимизация изображений

## 🔒 Безопасность

- **HTTPS** обязательно для продакшена
- **CSP Headers** настроены
- **Rate Limiting** для API
- **Input Validation** на всех формах
- **XSS Protection** включена

## 📈 SEO

- **Meta Tags** для всех страниц
- **Open Graph** и Twitter Cards
- **Structured Data** (JSON-LD)
- **Sitemap.xml** автоматически генерируется
- **Robots.txt** настроен

## 👥 Команда

### Frontend разработка
- **Архитектура**: Next.js + TypeScript
- **UI/UX**: Tailwind CSS + Framer Motion
- **Состояние**: Zustand + React Query

### Backend разработка (планируется)
- **API**: Node.js + Express
- **База данных**: PostgreSQL + Prisma
- **Аутентификация**: JWT

### DevOps
- **Хостинг**: Vercel
- **CI/CD**: GitHub Actions
- **Мониторинг**: Vercel Analytics

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Стандарты кода

- **ESLint** для проверки кода
- **Prettier** для форматирования
- **Conventional Commits** для сообщений коммитов
- **TypeScript** для типизации

## 📞 Поддержка

Если у вас есть вопросы или предложения:

- 📧 Email: dev@doorhan-crimea.ru
- 💬 Telegram: @doorhan_crimea_support
- 🐛 Issues: [GitHub Issues](https://github.com/Grangy/doorhanbg/issues)

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - за отличный фреймворк
- [Tailwind CSS](https://tailwindcss.com/) - за utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - за анимации
- [Lucide](https://lucide.dev/) - за иконки

---

<div align="center">

**Сделано с ❤️ для DoorHan Крым**

[🌐 Сайт](https://doorhan-crimea.ru) • [📱 Telegram](https://t.me/doorhan_crimea) • [📧 Email](mailto:info@doorhan-crimea.ru)

</div>

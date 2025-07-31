# 🚀 Sintec - Modern Multilingual Website

![Sintec Logo](https://img.shields.io/badge/Sintec-Website-orange?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

Современный многоязычный веб-сайт для компании Sintec - ведущего производителя смазочных материалов в Казахстане.

## ✨ Особенности

- 🌐 **Мультиязычность**: Поддержка русского и английского языков
- 📱 **Адаптивный дизайн**: Оптимизирован для всех устройств
- 🎨 **Современный UI**: Вдохновлен дизайном Vercel
- ⚡ **Быстрая производительность**: Next.js 14 с App Router
- 🔍 **Умный поиск**: Поиск по каталогу с автодополнением
- 📦 **Полный каталог**: Категории, фильтрация, детальные карточки товаров
- 🎭 **Плавные анимации**: Framer Motion для отличного UX

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+ 
- npm или yarn

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/Allexndr/sintec.git
cd sintec

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Доступные команды

```bash
npm run dev          # Запуск сервера разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен сервера
npm run lint         # Проверка кода
```

## 📁 Структура проекта

```
sintec/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Локализованные страницы
│   ├── globals.css        # Глобальные стили
│   └── layout.tsx         # Корневой layout
├── components/            # React компоненты
│   ├── layout/           # Компоненты макета
│   ├── pages/            # Страничные компоненты
│   ├── sections/         # Секции главной страницы
│   └── ui/               # UI компоненты
├── messages/             # Файлы переводов
│   ├── ru.json          # Русские переводы
│   └── en.json          # Английские переводы
├── public/               # Статические файлы
└── docs/                 # Документация
```

## 🌐 Мультиязычность

Сайт поддерживает два языка:
- 🇷🇺 **Русский** (`/ru`) - основной язык
- 🇬🇧 **Английский** (`/en`) - международная версия

Все тексты, навигация и контент полностью переведены.

## 🎨 Технологии

- **Framework**: Next.js 14 с App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Theming**: next-themes

## 📱 Адаптивность

Сайт оптимизирован для всех устройств:
- 📱 **Мобильные** (320px+)
- 📱 **Планшеты** (768px+)
- 💻 **Десктоп** (1024px+)
- 🖥️ **Большие экраны** (1280px+)

## 🚀 Деплой

### Vercel (Рекомендуется)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Allexndr/sintec)

### Другие платформы

Подробные инструкции по деплою на различные платформы смотрите в [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📚 Документация

- [📖 Руководство пользователя](./INSTRUCTIONS.md)
- [🚀 Инструкции по деплою](./DEPLOYMENT.md)
- [🗺️ План развития](./ROADMAP.md)
- [📋 Краткое руководство](./QUICK_START.md)
- [📊 Резюме проекта](./PROJECT_SUMMARY.md)

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - смотрите файл [LICENSE](LICENSE) для деталей.

## 📞 Контакты

- **Разработчик**: Александр Мурдасов
- **Заказчик**: Алибек (Alibek.style)
- **Email**: info@sintec.kz
- **Сайт**: [sintec.kz](https://sintec.kz)

---

⭐ Если проект вам понравился, поставьте звездочку! 
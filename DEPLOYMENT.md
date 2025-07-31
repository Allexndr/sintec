# Инструкции по развертыванию сайта Sintec

## 🚀 Быстрый старт

### 1. Локальная разработка

```bash
# Клонирование репозитория
git clone <repository-url>
cd sintec-website

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Открыть в браузере
open http://localhost:3000
```

### 2. Сборка для продакшена

```bash
# Сборка проекта
npm run build

# Запуск продакшн версии
npm start
```

## 🌐 Деплой на различные платформы

### Vercel (Рекомендуется)

1. **Подключение к Vercel:**
   - Зарегистрируйтесь на [vercel.com](https://vercel.com)
   - Подключите ваш GitHub/GitLab репозиторий
   - Vercel автоматически определит Next.js проект

2. **Настройка переменных окружения:**
   ```bash
   # В настройках проекта в Vercel добавьте:
   NODE_ENV=production
   ```

3. **Автоматический деплой:**
   - При каждом push в main ветку происходит автоматический деплой
   - Preview деплои создаются для pull requests

### Netlify

1. **Подключение:**
   - Зарегистрируйтесь на [netlify.com](https://netlify.com)
   - Подключите репозиторий
   - Настройте команды сборки:
     - Build command: `npm run build`
     - Publish directory: `.next`

2. **Настройка:**
   ```bash
   # Создайте netlify.toml в корне проекта
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Docker

1. **Создайте Dockerfile:**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   # Install dependencies based on the preferred package manager
   COPY package.json package-lock.json* ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   # Next.js collects completely anonymous telemetry data about general usage.
   # Learn more here: https://nextjs.org/telemetry
   # Uncomment the following line in case you want to disable telemetry during the build.
   ENV NEXT_TELEMETRY_DISABLED 1
   
   RUN npm run build
   
   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   ENV NEXT_TELEMETRY_DISABLED 1
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   
   # Set the correct permission for prerender cache
   RUN mkdir .next
   RUN chown nextjs:nodejs .next
   
   # Automatically leverage output traces to reduce image size
   # https://nextjs.org/docs/advanced-features/output-file-tracing
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   ENV HOSTNAME "0.0.0.0"
   
   CMD ["node", "server.js"]
   ```

2. **Сборка и запуск:**
   ```bash
   # Сборка образа
   docker build -t sintec-website .
   
   # Запуск контейнера
   docker run -p 3000:3000 sintec-website
   ```

### VPS/Сервер

1. **Подготовка сервера:**
   ```bash
   # Обновление системы
   sudo apt update && sudo apt upgrade -y
   
   # Установка Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Установка PM2 для управления процессами
   sudo npm install -g pm2
   ```

2. **Деплой приложения:**
   ```bash
   # Клонирование репозитория
   git clone <repository-url>
   cd sintec-website
   
   # Установка зависимостей
   npm install
   
   # Сборка проекта
   npm run build
   
   # Запуск с PM2
   pm2 start npm --name "sintec-website" -- start
   pm2 startup
   pm2 save
   ```

3. **Настройка Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Настройка окружения

### Переменные окружения

Создайте файл `.env.local` для локальной разработки:

```bash
# Основные настройки
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email настройки (для форм обратной связи)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# База данных (если планируется CMS)
DATABASE_URL=your-database-url

# API ключи
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### Продакшн переменные

Для продакшена настройте переменные в панели управления вашей платформы:

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@sintec.kz
SMTP_PASS=your-app-password
```

## 📊 Мониторинг и аналитика

### Google Analytics

1. Создайте аккаунт в Google Analytics
2. Добавьте ID отслеживания в переменные окружения:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Мониторинг производительности

- **Vercel Analytics** - встроенная аналитика Vercel
- **Sentry** - для отслеживания ошибок
- **Uptime Robot** - для мониторинга доступности

## 🔒 Безопасность

### SSL сертификат

- **Vercel/Netlify** - автоматически предоставляют SSL
- **VPS** - используйте Let's Encrypt:
  ```bash
  sudo apt install certbot python3-certbot-nginx
  sudo certbot --nginx -d your-domain.com
  ```

### Заголовки безопасности

Добавьте в `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 📱 PWA настройка

Для превращения сайта в PWA:

1. Создайте `public/manifest.json`:
   ```json
   {
     "name": "Sintec - Смазочные материалы",
     "short_name": "Sintec",
     "description": "Производство высококачественных смазочных материалов",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#f97316",
     "icons": [
       {
         "src": "/icon-192x192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "/icon-512x512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ]
   }
   ```

2. Добавьте в `layout.tsx`:
   ```html
   <link rel="manifest" href="/manifest.json" />
   <meta name="theme-color" content="#f97316" />
   ```

## 🚀 Оптимизация производительности

### Изображения

1. Используйте Next.js Image компонент
2. Оптимизируйте изображения (WebP формат)
3. Настройте CDN для статических файлов

### Кэширование

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 📞 Поддержка

При возникновении проблем:

1. Проверьте логи в панели управления платформы
2. Убедитесь, что все переменные окружения настроены
3. Проверьте совместимость версий Node.js (рекомендуется 18.x)

### Полезные команды

```bash
# Проверка типов TypeScript
npm run type-check

# Линтинг кода
npm run lint

# Аудит безопасности
npm audit

# Обновление зависимостей
npm update
```

---

**Успешного деплоя! 🎉** 
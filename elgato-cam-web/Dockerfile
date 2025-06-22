# Базовый образ с Node.js
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходники
COPY . .

# Собираем проект
RUN npm run build

# Запускаем Next.js
CMD ["npm", "start"]
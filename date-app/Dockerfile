FROM node:lts-alpine3.20 AS nodejs

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci --only=production

COPY public/ ./public/
COPY src/ ./src/

EXPOSE 3000

CMD ["npm", "start"]
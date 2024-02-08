FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production
RUN npm i -g @angular/cli

COPY . .
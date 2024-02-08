FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps
RUN npm i -g @angular/cli

COPY . .
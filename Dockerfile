FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY .angular .angular
COPY src src
COPY angular.json angular.json
COPY server.ts server.ts
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.json tsconfig.json
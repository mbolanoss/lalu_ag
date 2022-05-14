FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY /src .

RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
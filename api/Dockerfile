FROM alpine

WORKDIR /app/api

RUN apk add nodejs npm

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

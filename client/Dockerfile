FROM alpine

WORKDIR /app/client

RUN apk add nodejs npm

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

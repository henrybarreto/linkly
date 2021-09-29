FROM node:16.10.0-alpine3.13 as linkly

RUN mkdir /app

WORKDIR /app

COPY ./ /app

VOLUME /app

RUN npm install

EXPOSE 3000

FROM linkly as linkly-dev

CMD npm run dev

FROM linkly as linkly-prod

CMD npm start

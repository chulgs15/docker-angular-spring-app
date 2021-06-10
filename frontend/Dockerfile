FROM node:14-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx as runtime
RUN rm /usr/share/nginx/html/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/frontend  /usr/share/nginx/html
EXPOSE 4200

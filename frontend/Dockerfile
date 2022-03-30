FROM node:16-alpine as frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./public ./public
COPY ./src ./src
RUN npm run build

FROM nginx:stable-alpine
LABEL maintainer="Abdullah"
COPY --from=frontend-build /app/build/ /usr/share/nginx/html
COPY deployment/nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
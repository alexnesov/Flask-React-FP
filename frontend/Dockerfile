FROM node:16-alpine as frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./public ./public
COPY ./src ./src
ENV PORT=80
RUN npm run build

FROM nginx:latest
LABEL maintainer="Abdullah"
COPY --from=frontend-build /app/build/ /usr/share/nginx/html
EXPOSE 80
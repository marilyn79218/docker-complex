FROM node:alpine as build-phase

WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
# The reason we can expose port 3000 rather than port 80 (default) is our custom "./nginx/default.config"
EXPOSE 3000
COPY ./nginx/default.config /etc/nginx/conf.d/default.conf
COPY --from=build-phase /app/build /usr/share/nginx/html
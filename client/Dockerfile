FROM node:alpine as build-phase

WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
EXPOSE 3000
# Since we used a customed nginx config for this client (React) service, we need to override it over the default one
COPY ./nginx/default.config /etc/nginx/conf.d/default.conf
COPY --from=build-phase /app/build /usr/share/nginx/html

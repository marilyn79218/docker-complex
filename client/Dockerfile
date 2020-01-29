FROM node:alpine as build-phase

WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

# Production architecture
# - Single container: https://drive.google.com/open?id=1DaWPEK13Qlew7A98YkEM-Khf5ohAlKHt
# - Multiple containers: https://drive.google.com/open?id=1upesjR6qqVluQgoLSyC_UqahaB3HcGdD

FROM nginx
EXPOSE 3000
# Since we used a customed nginx config for this client (React) service, we need to override it over the default one
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-phase /app/build /usr/share/nginx/html

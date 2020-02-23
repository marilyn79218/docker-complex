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
# -------------------- DELETE ME AFTER EXPERIMENT IN PRODUCTION MODE --------------------
  # In actually, I'm quite doubt in the functionality of EXPOSE a port for Nginx (in Production)
  # Experiment (in development):
    # 1. Add "EXPOSE 5005" instruction to external Nginx's Dockerfile.dev
    # 2. NOT change the listening port of external Nginx from 80 to 5005 in default.conf file
    # 3. Change the port mapping in docker-compose.yml file from "3050:80" to "3050:5005"
    # 4. Run "$ docker-compose up --build" to rebuild images
    # 5. Then you'll see that the routing doesn't work without correcting step 2

  # In brief, all you need to do to change the listening port of internal Nginx in production is:
    # 1. Change the listening port as 5005 in client/nginx/default.conf file
    # 2. Make sure the one who make request to this Nginx is accessing the correct port
    #    (I.E., the Nginx which is responsible for external connection, is connecting the port 5005 of the internal Nginx)
    # 3. NO NEED to EXPOSE 5005 (???)
    # 4. The answer is YES. It doesn't matter with above steps in production.
# -------------------- DELETE ME AFTER EXPERIMENT IN PRODUCTION MODE --------------------
EXPOSE 3000
# Since we used a customed nginx config for this client (React) service, we need to override it over the default one
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-phase /app/build /usr/share/nginx/html

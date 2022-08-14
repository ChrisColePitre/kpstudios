# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16 as build-stage
WORKDIR /site
COPY package*.json /site/
RUN npm install
COPY ./ /site/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.22.0
COPY --from=build-stage /site/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

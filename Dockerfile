FROM node:12.16.3 as builder

RUN apt-get update && \
    apt-get install -y \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb

RUN mkdir -p /root/src/app
WORKDIR /root/src/app
ENV PATH /root/src/app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

FROM nginx:alpine

WORKDIR /root/src/app

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /root/src/app/build /var/www/html

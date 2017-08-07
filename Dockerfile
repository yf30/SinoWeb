FROM node:6.0-wheezy

MAINTAINER sino "sino@vip56.cn"

RUN apt-key adv --keyserver pgp.mit.edu --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
RUN echo "deb http://nginx.org/packages/mainline/debian/ wheezy nginx" >> /etc/apt/sources.list

ENV NGINX_VERSION 1.7.12-1~wheezy

RUN apt-get update && \
    apt-get install -y ca-certificates nginx && \
    rm -rf /var/lib/apt/lists/*

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

RUN npm i -g fullpage.js wowjs font-awesome vue2-editor mint-ui --save
RUN npm install cross-env
WORKDIR /app

COPY ./package.json /app/
RUN npm install --allow-root

COPY . /app/

RUN npm run build

RUN cp -R /app/*  /usr/share/nginx/html

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezoness

CMD ["nginx", "-g", "daemon off;"]
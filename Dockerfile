FROM node:8.2.1

COPY ./docker /

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

RUN /bin/bash /opt/requirements.sh

COPY ./docker/etc/gifted_nginx.conf /etc/nginx/sites-available/gifted_nginx.conf
RUN ln -s /etc/nginx/sites-available/gifted_nginx.conf /etc/nginx/sites-enabled

RUN chmod -R 777 /app

EXPOSE 80

CMD [ "npm", "start" ]

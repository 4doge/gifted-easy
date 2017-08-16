FROM node:8.2.1

ADD ./docker /

ADD . /app
WORKDIR /app
RUN chmod -R 777 /app

RUN /bin/bash ../opt/requirements.sh
RUN npm install

ADD ../docker/etc/gifted_nginx.conf /etc/nginx/sites-available/gifted_nginx.conf
RUN ln -s /etc/nginx/sites-available/gifted_nginx.conf /etc/nginx/sites-enabled

EXPOSE 80

CMD [ "npm", "start" ]

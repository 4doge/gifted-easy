FROM node:8.2.1

# Add a docker folders
ADD ./docker /

# Add app directory
ADD . /app

# Install requirements
RUN /bin/bash /opt/requirements.sh
RUN npm --prefix /app install

# Nginx config
ADD ./docker/etc/gifted_nginx.conf /etc/nginx/sites-available/gifted_nginx.conf
RUN ln -s /etc/nginx/sites-available/gifted_nginx.conf /etc/nginx/sites-enabled

# App folder permissions
RUN chmod -R 777 /app

# Container port
EXPOSE 80

# Start app
CMD [ "npm", "start" ]

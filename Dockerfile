FROM node:8.2.1

# Install requirements
RUN /bin/bash /opt/requirements.sh

# Nginx config
ADD ./docker/etc/gifted_nginx.conf /etc/nginx/sites-available/gifted_nginx.conf
RUN ln -s /etc/nginx/sites-available/gifted_nginx.conf /etc/nginx/sites-enabled


# Add a docker folders
ADD ./docker /

# Add app directory
ADD . /app
# App folder permissions
RUN chmod -R 777 /app
# Mark /app as working directory
WORKDIR /app

# Install app dependencies
RUN npm install

# Container port
EXPOSE 80

# Start app
CMD [ "npm", "start" ]

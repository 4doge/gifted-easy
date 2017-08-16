FROM node:8.2.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Install requirements
RUN /bin/bash build_files/requirements.sh


# Nginx config
COPY build_files/gifted_nginx.conf /etc/nginx/sites-available/gifted_nginx.conf
RUN ln -s /etc/nginx/sites-available/gifted_nginx.conf /etc/nginx/sites-enabled


EXPOSE 80
CMD [ "npm", "start" ]

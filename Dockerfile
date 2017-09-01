FROM node:8.2.1

LABEL maintainer="antonboksha@gmail.com"

RUN mkdir -p /project
WORKDIR /project

COPY package.json /project
RUN npm install

COPY . /project

RUN /bin/bash /project/build_files/requirements.sh

RUN chmod -R 777 /project

EXPOSE 80

CMD [ "npm", "start" ]

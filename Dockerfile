FROM node

# Create app directory
RUN mkdir -p /home/service
WORKDIR /home/service

# Bundle app source
COPY package.json /home/service
COPY lib /home/service/lib

COPY lib/dev.config.js /tmp/
RUN cat /tmp/dev.config.js \
    | sed 's/127.0.0.1/172.16.3.152/g' \
    | sed 's/3307/3307/g' \
    > /tmp/docker.config.js

ENV MYAPP_CONFIG=/tmp/docker.config.js

RUN echo $MYAPP_CONFIG

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8888
CMD [ "npm", "run", "serve" ]


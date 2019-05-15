FROM node:alpine

WORKDIR /home/app

COPY ./package.json ./

RUN npm install

COPY ./ ./


CMD ["npm", "start"]


# docker run -p 8080:8080 -it bahodge/simpleweb 

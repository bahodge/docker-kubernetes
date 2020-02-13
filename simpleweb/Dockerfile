# image
FROM node:alpine

# create a usr/app dir if its there
WORKDIR /usr/app

# copy only package.json
COPY ./package.json ./
RUN npm install

# copy everything
COPY ./ ./

# finish with this series of commands
CMD ["npm", "start"]
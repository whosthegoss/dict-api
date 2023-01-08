FROM node:16

EXPOSE 8888

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install 

CMD ["npm", "start"]


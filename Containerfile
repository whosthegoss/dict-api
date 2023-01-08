FROM node:slim

EXPOSE 3000

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

CMD ["npm", "start"]

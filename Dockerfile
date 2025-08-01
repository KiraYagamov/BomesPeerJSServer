FROM node:current-alpine

COPY . /PeerJSServer

WORKDIR /PeerJSServer

RUN npm i

CMD ["npm", "start"]

FROM node:12
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3189
CMD [ "node", "./src/index.js" ]

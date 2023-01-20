FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:14 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY package*.json .
RUN npm install
COPY . .

CMD ["npm","run","start"]
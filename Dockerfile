FROM node:14

# Create app directory
WORKDIR /usr/src/app

ENV TZ=Asia/Bangkok

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

#ENV NODE_ENV production
COPY package*.json ./

RUN npm install --unsafe-perm \
 && npm cache clear --force \
 && npm install pm2 -g

# Bundle app source
COPY . .

EXPOSE 3000
#CMD [ "node", "server.js" ] For Node run
CMD ["pm2-runtime", "app.js"]
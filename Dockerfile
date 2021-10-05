FROM alpine:3.11

WORKDIR /usr/app

COPY package*.json ./

# install nodejs
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y \
  nodejs
RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v

RUN apt-get update && apt-get install -y curl

COPY . .

EXPOSE 3000

CMD npm start:dev

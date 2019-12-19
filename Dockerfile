FROM node:slim

RUN apt-get update && \
  apt-get install -y \
  gcc \
  g++ \
  make \
  python && \
  apt-get clean

WORKDIR /backend

ADD ./ /backend

RUN yarn && \
  yarn compile

CMD yarn start:prod

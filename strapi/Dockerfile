FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

USER node

ARG NODE_ENV=development

WORKDIR /opt/app

EXPOSE 1337

CMD ["yarn", "develop"]
FROM node:lts-alpine

ARG SCRIPT_DIR
ENV SCRIPT_DIR ${SCRIPT_DIR}
WORKDIR /usr/src/app
COPY . .
CMD ["node", "index.js", "${SCRIPT_DIR}"]

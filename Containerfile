FROM docker.io/library/node as builder

WORKDIR /code

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /code

RUN npm install
RUN npm run build

FROM docker.io/nginxinc/nginx-unprivileged:alpine

COPY --from=builder /code/build /usr/share/nginx/html

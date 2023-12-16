###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As builder
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

###################
# PRODUCTION
###################

FROM nginx:1.19.0 As production

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

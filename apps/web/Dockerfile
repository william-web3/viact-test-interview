###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As builder

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

###################
# PRODUCTION
###################

FROM nginx:stable As production

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

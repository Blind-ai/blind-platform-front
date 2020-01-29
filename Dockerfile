FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN npm ci --prod
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 8080
CMD ["serve", "-p", "8080", "-s", "."]
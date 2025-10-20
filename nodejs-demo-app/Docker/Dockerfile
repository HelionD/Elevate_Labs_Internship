 #Base Image
FROM node:alpine3.22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

 #Runner
FROM gcr.io/distroless/nodejs22-debian12 AS runner

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["server.js"]

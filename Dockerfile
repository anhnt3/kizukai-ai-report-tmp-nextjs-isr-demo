FROM node:18-alpine

WORKDIR /app

# Accept build argument
ARG NEXT_PUBLIC_BFF_URL=http://localhost:3002
ENV NEXT_PUBLIC_BFF_URL=$NEXT_PUBLIC_BFF_URL

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
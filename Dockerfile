FROM node:19.9-alpine3.16 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm install -g vite
RUN npm run build
EXPOSE 5173
CMD ["npx", "vite", "preview", "--port", "5173", "--host"]
FROM node:24-alpine
WORKDIR /app
# Node Setup:
COPY package*.json .
RUN npm ci
# Alle restlichen Dateien kopieren (index.js)
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
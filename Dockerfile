# Dev environment
FROM node:20-alpine as dev

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install && npm install glob rimraf

# Copy the rest of the source code
COPY . .

# Expose the port and execute the application
EXPOSE 3000

# Build the app
RUN npm run build

# Prod environment
FROM node:20-alpine as prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=dev /usr/src/app/package*.json ./
RUN npm install --production

COPY --from=dev /usr/src/app/dist ./dist

CMD ["node", "dist/main"]

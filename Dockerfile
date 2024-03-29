# Dev environment
FROM node:20-alpine as dev

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

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

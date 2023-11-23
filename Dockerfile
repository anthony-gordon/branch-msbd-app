FROM node:18-alpine

EXPOSE 3000

WORKDIR /app
COPY . .

ARG SHOPIFY_CLI_PARTNERS_TOKEN=atkn_2ddce11c5a9ce9d4dcb24a8eded31146e46a730db5873f26170443c2d4af2dc9
ARG SHOPIFY_API_KEY=2377268e6e57bb7ea9b46fadf7b51563

ENV NODE_ENV=production

RUN npm install --omit=dev
# Remove CLI packages since we don't need them in production by default.
# Remove this line if you want to run CLI commands in your container.
RUN npm remove @shopify/app @shopify/cli
RUN npm run build

# You'll probably want to remove this in production, it's here to make it easier to test things!

CMD ["npm", "run", "docker-start"]

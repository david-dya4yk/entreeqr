# Use the official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --silent

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN yarn build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]

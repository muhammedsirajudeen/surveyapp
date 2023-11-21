# Use the official Node.js image as the base image
FROM node:18.17.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

#handling prisma migrations
RUN npx prisma generate


# RUN npx prisma db push

# Command to run the application
# CMD ["node", "index.js"]

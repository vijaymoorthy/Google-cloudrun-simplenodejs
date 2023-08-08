# Use the official Node.js image as the base image
# docker build --build-arg PORT=4000 -t mynode-app .
# docker run -p 8080:4000 mynode-app
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies using npm
RUN npm install

# Copy the app code to the working directory
COPY . .

# Declare a build argument for the port
ARG PORT

# Set the environment variable for the port using the build argument or 3000 as the default value
ENV PORT ${PORT:-3000}

# Expose the port that the app listens on
EXPOSE $PORT

# Define the command to run the app
CMD [ "node", "app.js" ]

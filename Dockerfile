# Use an official Node runtime as the base image
FROM node:20

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Set the working directory in the container
WORKDIR /app

# The command to run when the container starts
CMD ["/bin/bash"]
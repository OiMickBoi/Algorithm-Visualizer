# Use Node.js 20 as the base image
FROM node:20

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies required for chart rendering
RUN apt-get update && apt-get install -y \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev

# Set the working directory in the container
WORKDIR /app

# The command to run when the container starts
CMD ["/bin/bash"]
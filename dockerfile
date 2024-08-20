# Step 1: Use Node 16 as the base image
FROM node:lts-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy app source
COPY . /app

# Step 6: Expose port 4000 (if necessary)
EXPOSE 730

# Step 7: Build the app (if necessary)
RUN npm run build

# Step 8: Start the app (adjust the command according to your app)
CMD ["npm", "run", "dev"]
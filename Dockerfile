FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm install -g @angular/cli #If you plan to run Angular CLI commands directly in the container for development or testing purposes, installing it globally can be useful.
# Copy the rest of the application code
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/angular-library-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

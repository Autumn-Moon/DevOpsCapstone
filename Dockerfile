FROM nginx:alpine
LABEL author="Charath Chandra"
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
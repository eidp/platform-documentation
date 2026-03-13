FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:aec540f08f99df3c830549d5dd7bfaf63e01cbbb499e37400c5af9f8e8554e9f

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

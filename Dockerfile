FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:6582a34398ce9530ea3ae5b46595391a26ef44955335bed21a9afa4c3f715c70

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

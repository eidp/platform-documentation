FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:f99cc61bf1719f30230602036314ff6ba5dcede8965c5ed3ded71b8bbced3723

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:2bae49de8b7394f1ef4b6ddc5d8a6d07467d82883d20fb54556ce90b445870f9

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

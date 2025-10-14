FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:7f264708d61b6601ea160505d029ed822b0b610aa5226e9dbc1a4ecdc0c5559f

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

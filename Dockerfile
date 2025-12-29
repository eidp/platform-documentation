FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:42c794e539b375187fa8b34b8b3f693a919b0ce8009a85e862caf39186c10b4f

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

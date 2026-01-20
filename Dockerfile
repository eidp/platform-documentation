FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:062042031264627f065dbe8e16a2b54ec9a12757843c2d956e65623e650a1142

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

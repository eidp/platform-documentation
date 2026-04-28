FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.30-alpine@sha256:35a4455cd4153d7cd0ae1fcfa42451884ef19848202606f144d9a089376c7e6c

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

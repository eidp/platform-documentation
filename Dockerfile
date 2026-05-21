FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.31-alpine@sha256:3707417e3304492667a63c90ac0103465330437f9cdfaa38f8cd19f9975cbeed

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

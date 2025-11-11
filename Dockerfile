FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:a920100a2fa25d919ee0c6d0006e247d9bc1cdea9f6c070d91c7eb23304b3e07

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

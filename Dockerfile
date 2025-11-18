FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:24e13024ae9999412c675e7c1d4dcbafdb3c1eaa9e047ec50f6273c825db33e2

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

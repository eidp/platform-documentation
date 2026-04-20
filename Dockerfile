FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.30-alpine@sha256:8a7fd2dfd8bfae329b96118207b7a9153293f71c7fee042ed7ffbc4461a8788d

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

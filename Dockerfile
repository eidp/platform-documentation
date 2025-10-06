FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:46d9e0e89e4b8925a14df6aa6a5bdb64ab102a7ecc87a4bf02f4d100168ccf30

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

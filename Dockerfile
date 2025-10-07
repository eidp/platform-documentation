FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:3245911073f8a6f8f5257aa08339096f90ef8d5db70f502f8ffeb2b9ecd5ca18

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

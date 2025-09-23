FROM nginxinc/nginx-unprivileged:1.29-alpine@sha256:9fda08cc7f7580567e9d8c477420d7beadb9387d4004074c89f41f9d90ecf300

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

FROM nginxinc/nginx-unprivileged:1.29-alpine@sha256:7fe7fa7c0bda4c3cb0b7367eaad6a01db52226bce370eeb917664f7135c23b46

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

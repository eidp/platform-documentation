FROM nginxinc/nginx-unprivileged:1.29-alpine@sha256:285b776f6694a03fce74d62d38876311d759a40b0d54b5b2bf0113701bc2edb6

MAINTAINER "EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

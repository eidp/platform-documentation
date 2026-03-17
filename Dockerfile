FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:ccbac1a4c20a8b41c5dd1691bd91d63eda3b7989d643a33fd47841838519bfb9

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

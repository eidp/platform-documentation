FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:601c823234c474696ded03d619e67f1e59538802731543099c691aea67e4a553

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

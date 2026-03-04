FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:e93571f3d08325964770168617743bcce2d308255ded81e38172fb1803407e74

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:c3b9dd893f9ecd7046d3ac37b0dc218ff3c65fe53acd5cb5e1f97f3988272760

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

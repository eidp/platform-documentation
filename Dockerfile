FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:7445ca31ca290543d404a36051a0dfe5575913381d5646e62b9ac4c3f8afef8f

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

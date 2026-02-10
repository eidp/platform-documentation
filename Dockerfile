FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:bae24904860527735a08e04722a92add40784b91e61389b710367c7d0e6d3b25

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

FROM cr.eidp.io/docker/nginxinc/nginx-unprivileged:1.29-alpine@sha256:1334f319b3f53168e696b593c0307f58d68d367ac9cae1da746f5f3c4e222143

LABEL org.opencontainers.image.authors="EIDP"

COPY --chown=nginx:nginx src/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx build/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

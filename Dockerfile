FROM docker.io/floryn90/hugo:0.153.4-ext-ubuntu AS builder

# Add package.json before rest of repo for caching
COPY site/package.json site/package-lock.json site/.npmrc site/.npmignore /src/
RUN npm ci

COPY ./site /src

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.29-alpine
EXPOSE 8080
# The URL of the backend service, see https://github.com/acend/website-backend
ENV BACKEND_URL=http://acend-website-backend:8000


LABEL maintainer=acend.ch
LABEL org.opencontainers.image.title="acend.ch's Website"
LABEL org.opencontainers.image.description="Container with acend.ch's Website"
LABEL org.opencontainers.image.authors="acend.ch"
LABEL org.opencontainers.image.source="https://github.com/acend/website/"
LABEL org.opencontainers.image.licenses="CC-BY-SA-4.0"

COPY --from=builder  /src/public /usr/share/nginx/html
COPY ./nginx.conf.template /etc/nginx/templates/default.conf.template

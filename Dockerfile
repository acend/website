FROM docker.io/floryn90/hugo:0.131.0-ext-ubuntu AS builder

# Add package.json before rest of repo for caching
COPY site/package.json site/package-lock.json site/.npmrc site/.npmignore /src/
RUN npm ci

COPY ./site /src

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine
EXPOSE 8080
# The URL of the backend service, see https://github.com/acend/website-backend
ENV BACKEND_URL=http://acend-website-backend:8000


COPY --from=builder  /src/public /usr/share/nginx/html
COPY ./nginx.conf.template /etc/nginx/templates/default.conf.template

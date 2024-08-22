# Acend Website

This website is built with [Thulite](https://thulite.io/), a web framework designed for speed, security, and SEO — all powered by [Hugo](https://gohugo.io/) and npm. Hugo is a static site generator.

## Usage

You don't have to have npm installed locally with this setup

### Prerequisites

First step, clone this repository and run:

```bash
export HUGO_VERSION=$(sed -e '/^FROM docker.io\/floryn90\/hugo:/!d; s/.*:\(.[^ ]*\).*/\1/' Dockerfile)
docker run --rm --interactive -p 8080:8080 -v $(pwd)/site:/src docker.io/floryn90/hugo:${HUGO_VERSION}-ci /bin/bash -c "set -euo pipefail;npm ci"
```

This will take some time and will install all packages necessary to run Hugo and its tasks.

### Development

While developing your website, use:

```bash
export HUGO_VERSION=$(sed -e '/^FROM docker.io\/floryn90\/hugo:/!d; s/.*:\(.[^ ]*\).*/\1/' Dockerfile)
docker run --rm --interactive -p 8080:1313 -v $(pwd)/site:/src docker.io/floryn90/hugo:${HUGO_VERSION}-ci /bin/bash -c "set -euo pipefail; npm run dev"
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
export HUGO_VERSION=$(sed -e '/^FROM docker.io\/floryn90\/hugo:/!d; s/.*:\(.[^ ]*\).*/\1/' Dockerfile)
docker run --rm --interactive -p 8080:1313 -v $(pwd)/site:/src docker.io/floryn90/hugo:${HUGO_VERSION}-ci /bin/bash -c "set -euo pipefail;npm run preview"
```

Then visit <http://localhost:8080/> _- or a new browser windows popped-up already -_ to preview your new website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Build using Docker

Build the image:

```bash
docker build -t acend/website .
```

Run it locally:

```bash
docker run -i -p 8080:8080 -e BACKEND_URL=http://localhost:8080 acend/website
```

**Note:** the `-e BACKEND_URL` param is needed due to the fact that we expect a Backend to be ready for the integration of several Backends.

### Using Buildah and Podman

Build the image:

```bash
buildah build-using-dockerfile -t acend/website-hugo:latest .
```

Run it locally with the following command. Beware that `--rmi` automatically removes the built image when the container stops, so you either have to rebuild it or remove the parameter from the command.

```bash
podman run --rm --rmi --interactive -e BACKEND_URL=http://localhost:8080 --publish 8080:8080 localhost/acend/website
```

## Update Dependencies

First update dependency in the `package.json` file.
Then run the following command:

```bash
export HUGO_VERSION=$(sed -e '/^FROM docker.io\/floryn90\/hugo:/!d; s/.*:\(.[^ ]*\).*/\1/' Dockerfile)
docker run --rm --interactive -v $(pwd)/site:/src docker.io/floryn90/hugo:${HUGO_VERSION}-ci /bin/bash -c "set -euo pipefail;npm install"
```

This will make sure, the package-lock.json file is updates accordingly.

Build the container image and test the deployment.

## Deployment

### Pull Request (PR)

Upon each PR, a GitHub Action [pull_request.yaml](.github/workflows/pull_request.yaml) is triggered which builds a Docker image and pushes it to `ghcr.io/acend/website:pr-{{prnumber}}` on ghcr.io. The image will be deployed by the Workflow.

### Push to Master

Once a PR gets accepted and merged to master, a similar GitHub Action [push.yaml](.github/workflows/pull_request.yaml) will trigger with a push to `ghcr.io/acend/website:latest` and a deployment to <https://acend.ch>.

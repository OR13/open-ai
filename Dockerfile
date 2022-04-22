FROM python:3-slim AS build-env
ADD . /app
WORKDIR /app


# required to build numpy
RUN apt-get update && \
    apt-get install -y \
        build-essential \
        make \
        gcc

# We are installing a dependency here directly into our app source dir
RUN pip install --target=/app numpy openai

# A distroless container image with Python and some basics like SSL certificates
# https://github.com/GoogleContainerTools/distroless
FROM gcr.io/distroless/python3-debian10
COPY --from=build-env /app /app
WORKDIR /app
ENV PYTHONPATH /app
CMD ["/app/main.py"]
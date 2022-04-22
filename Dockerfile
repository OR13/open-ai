FROM python:3.7

ADD . /app
WORKDIR /app

# required to build numpy
RUN apt-get update && \
    apt-get install -y \
        build-essential \
        make \
        gcc

# We are installing a dependency here directly into our app source dir
RUN pip install --target=/app openai

WORKDIR /app
ENV PYTHONPATH /app
CMD ["/app/main.py"]
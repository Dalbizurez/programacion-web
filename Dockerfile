FROM python:3.14-slim AS base

RUN mkdir /app
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip

COPY ./requirements.txt /app/


RUN apt-get update && apt-get install -y libpq-dev build-essential

RUN pip install --no-cache-dir -r requirements.txt


FROM python:3.14-slim

RUN useradd -m -r appuser && \
    mkdir /app && \
    chown -R appuser /app


COPY --from=base /usr/local/lib/python3.14/site-packages/ /usr/local/lib/python3.14/site-packages/
COPY --from=base /usr/local/bin/ /usr/local/bin/

WORKDIR /app

COPY --chown=appuser:appuser . /app/

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

USER appuser

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "hw_05.wsgi:application"]
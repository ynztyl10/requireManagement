#FROM ynztyl10/requiremanagement

RUN mkdir -p /data/db
RUN mongodb/bin/mongod --dbpath /data/db
RUN python index.py

EXPOSE 9999

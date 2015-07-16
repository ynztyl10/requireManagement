FROM centos

RUN mkdir -p /data/db
RUN pwd
RUN mongodb/bin/mongod --dbpath /data/db
RUN python index.py

EXPOSE 9999

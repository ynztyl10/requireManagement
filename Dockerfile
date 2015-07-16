FROM centos

RUN mkdir -p /data/db
RUN pwd
RUN ls -al
#RUN mongodb/bin/mongod --dbpath /data/db
RUN easy_install -U pymongo

EXPOSE 9999

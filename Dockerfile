FROM centos

ADD . /src
RUN cd /src
RUN pwd
RUN ls -al
#RUN mongodb/bin/mongod --dbpath /data/db
#RUN easy_install -U pymongo

EXPOSE 9999

FROM centos

ADD . /src
RUN mkdir -p /data/db
RUN /src/mongodb/bin/mongod --dbpath /data/db
RUN cd /src
RUN python /src/index.py
#RUN easy_install -U pymongo

EXPOSE 9999

FROM centos

ADD . /src
RUN mkdir -p /data/db
RUN chmod +x /src/index.py
RUN python /src/index.py
#RUN easy_install -U pymongo

EXPOSE 9999

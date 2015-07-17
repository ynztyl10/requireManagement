FROM tutum/mongodb


RUN ls -al
RUN mkdir -p /data/db
RUN mongod --dbpath /data/db
RUN echo "run mongodb success"


FROM python:2.7
RUN easy_install -U tornado
RUN easy_install -U pymongo

ADD . /src
RUN chmod +x /src/index.py
RUN python /src/index.py 
RUN echo "success"
EXPOSE 9999

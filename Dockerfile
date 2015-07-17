FROM python:2.7

RUN curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel55-3.0.4.tgz
RUN tar -zxvf mongodb-linux-x86_64-rhel55-3.0.4.tgz
RUN mkdir -p mongodb
RUN cp -R -n mongodb-linux-x86_64-rhel55-3.0.4/ mongodb
RUN mkdir -p /data/db
RUN mongodb/bin/mongod --dbpath /data/db
RUN echo "run mongodb success"

ADD . /src
#RUN wget https://bootstrap.pypa.io/ez_setup.py -O - | python
RUN easy_install -U tornado
RUN easy_install -U pymongo
RUN chmod +x /src/index.py
RUN python /src/index.py 
RUN echo "success"
EXPOSE 9999

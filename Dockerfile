FROM python:2.7

ADD . /src
RUN mkdir -p /data/db
#RUN wget https://bootstrap.pypa.io/ez_setup.py -O - | python
RUN easy_install -U tornado
RUN easy_install -U pymongo
RUN chmod +x /src/index.py
RUN chmod +x /src/mongodb/bin/mongod
RUN nohup /src/mongodb/bin/mongod --dbpath /data/db &
RUN echo "run mongodb success"
EXPOSE 9999
RUN nohup python /src/index.py &
RUN echo "success"

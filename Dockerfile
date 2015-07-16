FROM python:2.7

ADD . /src
RUN mkdir -p /data/db
#RUN wget https://bootstrap.pypa.io/ez_setup.py -O - | python
RUN easy_install -U tornado
RUN easy_install -U pymongo
RUN chmod +x /src/index.py
RUN python /src/index.py
#RUN easy_install -U pymongo

EXPOSE 9999

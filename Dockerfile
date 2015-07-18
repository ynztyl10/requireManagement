FROM tutum/mongodb


RUN ls -al
RUN mkdir -p /data/db
RUN nohup mongod --dbpath /data/db &
RUN ps -ef| grep mongo
RUN echo "run mongodb success"


FROM python:2.7
RUN easy_install -U tornado
RUN easy_install -U pymongo

ADD . /src
RUN chmod +x /src/index.py
EXPOSE 9999
CMD ["python", "/src/index.py"]
RUN echo "success"


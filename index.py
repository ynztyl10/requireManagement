#coding=utf-8
import os
from tornado import ioloop,web
from tornado.escape import json_encode
from pymongo import MongoClient
import json
from bson import json_util
from bson.objectid import ObjectId


MONGODB_DB_HOST = str(os.environ.get('MONGODB_PORT_27017_TCP_ADDR')) if os.environ.get('MONGODB_PORT_27017_TCP_ADDR') else 'localhost'
MONGODB_DB_PORT = int(os.environ.get('MONGODB_PORT_27017_TCP_PORT')) if os.environ.get('MONGODB_PORT_27017_TCP_PORT') else 27017
MONGODB_DB_NAME = str(os.environ.get('MONGODB_INSTANCE_NAME')) if os.environ.get('MONGODB_INSTANCE_NAME') else 'getRequires'
MONGODB_DB_USER = str(os.environ.get('MONGODB_USERNAME')) if os.environ.get('MONGODB_USERNAME') else ''
MONGODB_DB_PASSWD = str(os.environ.get('MONGODB_PASSWORD')) if os.environ.get('MONGODB_PASSWORD') else ''
client = MongoClient(MONGODB_DB_HOST,MONGODB_DB_PORT)
client[MONGODB_DB_NAME].authenticate(MONGODB_DB_USER, MONGODB_DB_PASSWD)
db = client[MONGODB_DB_NAME]

class IndexHandler(web.RequestHandler):
    def get(self):
        self.render("index.html")

class RequiresHandler(web.RequestHandler):
    def get(self):
        requires = db.requires.find()
        self.set_header("Content-Type", "application/json")
        self.write(json.dumps(list(requires),default=json_util.default))
        

    def post(self):
        require_data = json.loads(self.request.body)
        require_id = db.requires.insert(require_data)
        print('require created with id ' + str(require_id))
        self.set_header("Content-Type", "application/json")
        self.set_status(201)
        

class RequireHandler(web.RequestHandler):
    def get(self , require_id):
        require = db.requires.find_one({"_id":ObjectId(str(require_id))})
        self.set_header("Content-Type", "application/json")
        self.write(json.dumps((require),default=json_util.default))

    def post(self, require_id):
        require_data = json.loads(self.request.body)
        require_data['_id'] = ObjectId(str(require_id))
        require = db.requires.save(require_data)
        self.set_header("Content-Type","application/json")
        self.set_status(201)

    def delete(self,require_id):
        print require_id
        res = db.requires.delete_one({"_id":ObjectId(str(require_id))})
        if res.raw_result['ok'] == 1:
            self.set_header("Content-Type","application/json")
            self.set_status(201)
        else:
            res = {"errno":-1,"errmsg":"删除失败"}
            self.set_header("Content-Type","application/json")
            self.write(json.dumps((res),default=json_util.default))


class CodesHandler(web.RequestHandler):
    """docstring for CodesHandler"""
    def get(self):
        codes = db.codes.find()
        self.set_header("Content-Type", "application/json")
        self.write(json.dumps(list(codes),default=json_util.default))

    def post(self):
        code_data = json.loads(self.request.body)
        code_id = db.codes.insert(code_data)
        print('code created with id ' + str(code_id))
        self.set_header("Content-Type", "application/json")
        self.set_status(201)

class CodeHandler(web.RequestHandler):
    """docstring for CodeHandler"""
    def get(self, code_id):
        code = db.codes.find_one({'_id':ObjectId(str(code_id))})
        self.set_header("Content-Type", "application/json")
        self.write(json.dumps((code),default=json_util.default))

    def post(self, code_id):
        code_data = json.loads(self.request.body)
        code_data['_id'] = ObjectId(str(code_id))
        res = db.codes.save(code_data)
        self.set_header("Content-Type","application/json")
        self.set_status(201)

    def delete(self, code_id):
        res = db.codes.delete_one({"_id":ObjectId(str(code_id))})
        if res.raw_result['ok'] == 1:
            self.set_header("Content-Type","application/json")
            self.set_status(201)
        else:
            res = {"errno":-1,"errmsg":"删除失败"}
            self.set_header("Content-Type","application/json")
            self.write(json.dumps((res),default=json_util.default))
        
        
settings = {
    "template_path": os.path.join(os.path.dirname(__file__), "templates"),
    "static_path": os.path.join(os.path.dirname(__file__), "static"),
    "debug" : True
}

application = web.Application([
    (r'/', IndexHandler),
    (r'/index', IndexHandler),
    (r'/api/v1/requires',RequiresHandler),
    (r'/api/v1/requires/(.*)', RequireHandler),
    (r'/api/v1/codes',CodesHandler),
    (r'/api/v1/codes/(.*)', CodeHandler)
],**settings)

if __name__ == "__main__":
    application.listen(9999)
    ioloop.IOLoop.instance().start()

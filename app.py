import imp
import os


if __name__ == '__main__':
   ip   = os.environ['TORNADO_PYTHON_IP']
   port = int(os.environ['TORNADO_PYTHON_PORT'])
   app = imp.load_source('application', 'tornadoapp.py')

   app.application.listen(port , ip)
   app.ioloop.IOLoop.instance().start()
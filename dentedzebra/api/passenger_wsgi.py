import imp
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

api = imp.load_source('api', 'api.py')
application = api.app

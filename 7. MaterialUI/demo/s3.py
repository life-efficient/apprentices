import boto3
import json
import time
from uuid import uuid4

s3 = boto3.resource('s3')
obj = s3.Object('kvdemo', 'demo_ob.json')

try:
	d = obj.get()['Body'].read()
	d = json.loads(d)
except:
	print('user aint here')
	d = {'user_id': str(uuid4())}
	pass

d.update({'last_active': time.time()})	

obj.put(Body=json.dumps({'user_id': 'Harry'}))
print(d)

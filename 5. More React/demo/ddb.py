import boto3

ddb = boto3.resource('dynamodb')
table = ddb.Table('demo')
table.put_item(Item={'user_id': 'Harry'})
user = table.get_item(Key={'user_id': 'Harry'})
print(user)

import requests
import json

r = requests.get('https%3A%2F%2Fm0tccb6wy4.execute-api.eu-west-1.amazonaws.com%2Fproduction%2Fcomments')
r = r.json()
print(r)
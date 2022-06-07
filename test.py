from urllib import response
from flask import request
import requests

Base="http://127.0.0.1:5000/"

response = requests.get(Base)
print(response.json())
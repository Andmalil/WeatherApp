import requests
import json


key = "3b63195cbc744f2f843152516242009"
url = "http://api.weatherapi.com/v1"

url += "/current.json"
#x = requests.post(url, data={"key": key, "q": "55.9872,37.2022"})
with open("request", "r") as r:
    x = r.read()
y = json.loads(x)
for k in y:
    print(k, ": ", y[k])
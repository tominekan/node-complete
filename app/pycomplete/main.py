"""
The idea is create a quick api that we can query to get completions.
"""

from fastapi import FastAPI
from pycomplete.pycomplete import PyComplete
import json

PATH_TO_STORE = "/Users/tominekan/Code/node-complete/app/site-components/store.json"

with open(PATH_TO_STORE, "r") as f:
    store = json.load(f)
    descriptions = store["descriptions"]
    product_names = store["names"]

comp = PyComplete("")
for desc in descriptions:
    comp.add_line(desc.lower())

for name in product_names:
    comp.add_line(name.lower())

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to lebron james"}

@app.get("/complete/{query}")
def query_store(query: str):
    result = " ".join(comp.predict(query.lower()))
    return {"message": result}
    
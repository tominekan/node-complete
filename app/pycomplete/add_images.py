import json
import random
PATH_TO_STORE = "/Users/tominekan/Code/node-complete/app/site-components/store.json"

# First read the store to a dictionary
with open(PATH_TO_STORE, "r") as f:
    store = dict(json.load(f))

# Add the image field
# Should just be a list of numbers
store["images"] = []
for _ in range(99):
    store["images"].append(random.randint(1, 49))

# Put the updated store back into the json
with open(PATH_TO_STORE, "w") as f:
    json.dump(store, f)
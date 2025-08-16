# PROOF OF CONCEPT

This is bascially the interface I built to show how `pycomplete` could possibly be used. It's a fake E-Commerce site with fake listings lol.

## What did I do?
Basically, we spin up a quick API (using FastAPI) to provide completions using `pycomplete` the library that I built to learn Markov chains. The completions were trained on entry

Then, we build a basic react frontend of what a possible E-Commerce search page could look like, and query the API built to get completions. We also want to show search results

## How to run
First, we want to get the completions API up and running. To do this, we enter `app/pycomplete`, install dependencies, activate the virtual environment, and run fastapi dev.

```
cd app/pycomplete
uv sync
source .venv/bin/activate
fastapi dev main.py
```

After the completions API is set up, we want to set up the frontend, using

```
npm run dev
```

Now, depending on what port our completion server runs in, we might need to modify the `vite.config.ts`. By default, its running on `localhost:8000`, but if it's different,
you just go into `vite.config.ts` and replace the port number with whatever the new valuds is.
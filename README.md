# PROOF OF CONCEPT

This is bascially the interface I built to show how `pycomplete` could possibly be used. It's a fake E-Commerce site with fake listings lol.

## What did I do?
Basically, we spin up a quick API (using FastAPI) to provide completions using `pycomplete` the library that I built to learn Markov chains. The completions were trained on entry

Then, we build a basic react frontend of what a possible E-Commerce search page could look like, and query the API built to get completions. We also want to show search results


## TODOS:
- [x] Currently for the autocomplete, we split the array by space, and join it back together after removing the last element, what if the list is empty though after removing the last element, now we have an undefined luh situation. Fix this
- [x] Implement photos for each product to be more consistent.
    - [x] Might reimplement the python code to generate types, but instead have it also pick a random number between 1 and 49 for the image, along with other data.
    This means we'll have to change the code to get image in `ProductCard.tsx`.
- [ ] Implement reverse indexing system, to get actual results. This means that we descriptions and names as keys and product indices as values.
- [ ] Implement live display of search results in `ProductGrid`. We just want to display products with names or descriptions containing our query.
import NavigationMenu from "~/site-components/NavigationMenu";
import ProductGrid from "~/site-components/ProductGrid";
import Container from "react-bootstrap/Container";
import storeJson from "~/site-components/store.json"
import { useState, useEffect } from "react";
import type { Product, Store } from "~/site-components/useful_types";


let store: Store = [];

// Populate Store with all products in store.json
for (let i = 0; i < storeJson.names.length; i++) {
    let product: Product = {
        name: storeJson.names[i],
        description: storeJson.descriptions[i],
        price: storeJson.prices[i],
        image: storeJson.images[i]
    };

    store.push(product);
}

export default function Home() {
    const [query, setQuery] = useState("");
    const [placeholder, setPlaceholder] = useState("Search E-Commerce");

    useEffect(() => {
        function doCompletions() {
            let words: Array<string> | undefined = query.split(" ")
            let last_word: string | undefined = words.pop()
            fetch(`/complete/${last_word}`).then(
                response => response.json()
            ).then(
                // Basically we combine the query again + predictions 
                data => setPlaceholder(words.join(" ") + " " + ((data.message != undefined) ? data.message : ""))
            )
        }

        if (query.length == 0) setPlaceholder("Search E-Commerce"); else doCompletions();
    }, [query]);

    return (
        <Container fluid={true}>
            <NavigationMenu query={query} prediction={placeholder} onChange={event => setQuery(event.target.value)}/>
            <ProductGrid store={store} itemsDisplayed={15}/>
        </Container>
    )
}
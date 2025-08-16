import NavigationMenu from "~/site-components/NavigationMenu";
import ProductGrid from "~/site-components/ProductGrid";
import Container from "react-bootstrap/Container";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import storeJson from "~/site-components/store.json";
import { useState, useEffect } from "react";
import type { Product, Store } from "~/site-components/useful_types";

let store: Store = [];

// Populate Store with all products in store.json
for (let i = 0; i < storeJson.names.length; i++) {

    // Create a product listing
    let product: Product = {
        name: storeJson.names[i],
        description: storeJson.descriptions[i],
        price: storeJson.prices[i],
        image: storeJson.images[i]
    };

    store.push(product);
}


export default function Home() {
    const customTheme = {
        "border-radius": "20px"
    }
    const DEFAULT_SEARCH_QUERY = "Search LeCommerce";
    const [query, setQuery] = useState("");
    const [placeholder, setPlaceholder] = useState(DEFAULT_SEARCH_QUERY);
    const [products, setProducts] = useState(store)

    useEffect(() => {
        function doCompletions() {
            let words: Array<string> | undefined = query.split(" ");
            let last_word: string | undefined = words.pop();
            fetch(`/complete/${last_word}`).then(
                response => response.json()
            ).then(
                // Basically we combine the query again + predictions 
                data => setPlaceholder(words.join(" ") + " " + ((data.message != undefined) ? data.message : ""))
            )
        }

        if (query.length == 0) setPlaceholder(DEFAULT_SEARCH_QUERY); else doCompletions();
    }, [query]);

    useEffect(() => {
        let modQuery = query.toLowerCase();
        console.log(store.filter(product => (product.name.toLowerCase().includes(modQuery) || product.description.toLowerCase().includes(modQuery))));
        setProducts(store.filter(product => (product.name.toLowerCase().includes(modQuery) || product.description.toLowerCase().includes(modQuery))));
    }, [query])

    return (
        <Container fluid={true}>
            <NavigationMenu query={query} prediction={placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}/>
            <ProductGrid store={products} itemsDisplayed={15}/>
        </Container>
    )
}
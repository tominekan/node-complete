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
        price: storeJson.prices[i]
    };

    store.push(product);
}

export default function Home() {
    const [query, setQuery] = useState("");
    const [placeholder, setPlaceholder] = useState("Search E-Commerce");

    useEffect(() => {
        if (query.length == 0) setPlaceholder("Search E-Commerce")
    });

    return (
        <Container fluid={true}>
            <NavigationMenu query={query} prediction={placeholder}/>
            <ProductGrid store={store} itemsDisplayed={15}/>
        </Container>
    )
}
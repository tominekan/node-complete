import NavigationMenu from "~/site-components/NavigationMenu";
import ProductGrid from "~/site-components/ProductGrid";
import Container from "react-bootstrap/Container";
import storeJson from "~/site-components/store.json"
import type { Product, Store } from "~/site-components/useful_types";

let store: Store = [];

// Populate Store with all products in store.json
for (let i = 0; i < storeJson.names.length; i++) {
    let product: Product = {
        name: storeJson.names[i],
        description: storeJson.descriptions[i],
        price: storeJson.prices[i]
    }

    store.push(product)
}

export default function Home() {
    return (
        <Container fluid={true}>
            <NavigationMenu />
            <ProductGrid store={store} itemsDisplayed={15}/>
        </Container>
    )
}
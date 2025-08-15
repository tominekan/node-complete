import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import type { Store } from "./useful_types";
import type { JSX } from "react";
import { useState, useEffect } from "react";

type ProductGridProps = {
    store: Store,
    itemsDisplayed: number,
    itemsPerRow?: number,
};


export default function ProductGrid(props: ProductGridProps) {
    // Populate the Product Grid
    let paginationIndex: number = 1;
    let productGrid: Array<Array<JSX.Element>> = [];
    let productPagination = [];

    const [active, setActive] = useState(1)
    
    
    // By default we cap the max items per row to 4, unless 
    let maxItemsPerRow = (props.itemsPerRow === undefined) ? 4 : props.itemsPerRow;

    for (let page = 0; page < props.store.length; page += props.itemsDisplayed) {
        let currIndex = paginationIndex;
        productPagination.push(
            <Pagination.Item key={currIndex} active={currIndex === active} onClick={() => setActive(currIndex)}>
                {currIndex}
            </Pagination.Item>
        )

        // Make sure that the index we're going to build the grid to exists
        productGrid.push([]);


        // Keep track of how many elements per row
        let row: JSX.Element[] = [];

        // Keep adding product to grid until we either have reached the set amount for the page, or we've run out of itmems to add
        for (let productIndex = page; (productIndex <= (page + props.itemsDisplayed)) && (productIndex < props.store.length); productIndex++) {
            // EACH ROW IN THE GRID SHOULD CONTAIN A SET NUMBER OF PRODUCTS
            if (row.length == maxItemsPerRow) {
                // Account for zero based indexing
                productGrid[currIndex - 1].push(
                    <Row key={Math.random()} className="d-flex justify-evenly">
                        {row}
                    </Row>
                );
                // Adds a break between every product listings 
                productGrid[currIndex - 1].push(
                    <br />
                );
                row = [];
            }

            // Add product to the row
            row.push(
                <ProductCard 
                name={props.store[productIndex].name}
                price={props.store[productIndex].price}
                description={props.store[productIndex].description}
                image={props.store[productIndex].image}
                />
            );
        }

        // Increment paginationIndex
        paginationIndex++;
    }


    return (
        <Container className="mt-6 d-flex flex-col align-items-center justify-between">
            <Container>
                {productGrid[active - 1]}
            </Container>

            <Pagination className="mt-4">
                {productPagination}
            </Pagination>
        </Container>
    )
}
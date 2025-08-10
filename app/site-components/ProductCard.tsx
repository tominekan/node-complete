import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import grey from "~/site-components/grey_image.png"
import type { Product } from "./useful_types";

/**
 * @returns a randomly selected image
 */
// NOTE: VERY HACKY SOLUTION, ONLY USING THIS BECAUSE THIS IS A PROOF OF CONCEPT
const images = import.meta.glob("./images/*.jpeg", {eager: true})
const imageList = Object.values(images).map((mod: unknown) => mod.default)
function getRandomImage() {
    let imgNum: number = Math.floor(Math.random() * imageList.length)
    return imageList[imgNum];
}

export default function ProductCard(props: Product) {
    return (
        <Card style={{ width: "19rem"}} className="me-1 p-0">
            {/* LOL THIS IS JUST A RANDOM IMAGE */}
            <Card.Img variant="top" src={getRandomImage()} style={{ height: "12rem"}}/>

            <Card.Body>
                <Container className="d-flex justify-between p-0">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Title>${props.price}</Card.Title>
                </Container>

                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
} 
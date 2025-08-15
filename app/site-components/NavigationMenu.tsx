import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar";
import type { ChangeEventHandler } from "react";

type NavigationMenuProps = {
    query: string,
    prediction: string,
    onChange: ChangeEventHandler
};

export default function NavigationMenu(props: NavigationMenuProps) {
    return (
        <Navbar expand="lg" className="bg-white">
            <Container>
                <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Fake links section  */}
                    <Nav className="me-auto">
                        <Nav.Link href="#">Deals</Nav.Link>
                        <Nav.Link href="#">Saved</Nav.Link>
                        <NavDropdown title="Categories" id="categories-dropdown">
                            <NavDropdown.Item href="#">Hardware</NavDropdown.Item>
                            <NavDropdown.Item href="#">Kitchen</NavDropdown.Item>
                            <NavDropdown.Item href="#">Cleaning</NavDropdown.Item>
                            <NavDropdown.Item href="#">Fashion</NavDropdown.Item>
                            <NavDropdown.Item href="#">More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* Where the actual magic happens */}
                    <SearchBar value={props.query} placeholder={props.prediction} onChange={props.onChange}/>

                    {/* More fake shii */}
                    <Nav>
                        <NavDropdown title="Account" id="account-dropdown">
                            <NavDropdown.Item href="#">My Cart</NavDropdown.Item>
                            <NavDropdown.Item href="#">Recommended</NavDropdown.Item>
                            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
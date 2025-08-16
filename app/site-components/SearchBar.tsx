import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState, type ChangeEventHandler } from "react";

type SearchBarProps = {
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler,
};

export default function SearchBar(props: SearchBarProps) {
    
    
    return (
        <Container className="position-relative mx-2">
            <Form.Control 
            type="text"
            value={props.value}
            aria-label="Search Bar"
            onChange={props.onChange}
            style={{borderRadius: "12px"}}
            />

            <span style={{
                position: "absolute",
                left: "1.568rem",
                top: "7px",
                color: "rgba(128, 128, 128, 0.5)"
            }}>{props.placeholder}</span>
        </Container>
        
    )
}
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

type SearchBarProps = {
    value: string,
    placeholder: string
};

export default function SearchBar(props: SearchBarProps) {
    return (
        <Container className="position-relative mx-3">
            <Form.Control 
            type="text"
            value={props.value}
            aria-label="Search Bar"
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
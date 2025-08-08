import Form from "react-bootstrap/Form";

type SearchBarProps = {
    value: string;
}

export default function SearchBar(props: SearchBarProps) {
    return (
        <Form.Control 
        type="text"
        placeholder="Search E-Commerce"
        value={props.value}
        aria-label="Search Bar"
        className="mx-3"
        />
    )
}
import { Button } from "react-bootstrap";

export default function Practice(props) {
    return (
        <div>
            <p>Practice</p>
            <Button onClick={props.section}>Home</Button>
        </div>
    )
}
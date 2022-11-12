import { Button } from "react-bootstrap";

export default function Practice(props) {
    return (
        <div>
            <p>Practice</p>
            <Button onClick={props.activity}>Home</Button>
        </div>
    )
}
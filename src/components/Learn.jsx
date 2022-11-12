import Button from 'react-bootstrap/Button'

export default function Learn(props) {
    return(
        <div>
           <p>Learn</p>
            <Button onClick={props.activity}>Home</Button>
        </div>
    )
}
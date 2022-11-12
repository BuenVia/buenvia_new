import Button from 'react-bootstrap/Button'

export default function Home(props) {
    return (
        <div>
            <Button onClick={props.activity} value='learn'>Learn</Button>
            <Button onClick={props.activity} value='practice'>Practice</Button>
        </div>
    )
}
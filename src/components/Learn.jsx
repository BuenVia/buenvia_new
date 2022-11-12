import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Learn(props) {

    const [vocabs, setVocabs] = useState([])

    const url = 'http://localhost:9000/api/topics/count'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setVocabs(json))
    }, [])

    return(
        <div>
            <Button onClick={props.activity}>Home</Button>
           <h3>Learn</h3>
           {vocabs.map((vocab) => {
            return (<div><Button>{vocab.name}</Button></div>)
           })}
        </div>
    )
}
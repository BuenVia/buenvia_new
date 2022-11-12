import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import LearnButton from './LearnButton'

export default function Learn(props) {

    const [vocabs, setVocabs] = useState([])

    const url = 'http://localhost:9000/api/topics/count'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setVocabs(json))
    }, [])

    return(
        <div
        className='p-5'>
            <Button onClick={props.section}>Home</Button>
           <div className='card'>
                <h3>Learn</h3>
                <div className='mt-4'>
                {vocabs.map((vocab) => {
                return (<LearnButton name={vocab.name} />)
               })}

           </div>
           </div>
        </div>
    )
}
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import LearnButton from './LearnButton'

export default function Learn(props) {

    // Displays available topics
    const [vocabs, setVocabs] = useState([])

    const url = 'https://buenvia.herokuapp.com/api/topics/count'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setVocabs(json))
    }, [])

    // Sets new topic
    const [topic, setTopic] = useState('choose')

    function chosenTopic() {
        // if (topic === 'choose') {
        //     return (
        //         <div className='card'>
        //             <h3>Learn</h3>
        //             <div className='mt-4'>
        //                 {vocabs.map((vocab) => {
        //                 return (<LearnButton topicHandle={topicHandle} name={vocab.name} />)
        //                 })}
        //             </div>
        //         </div>
        //     )
        // }
        console.log(true)
    }

    function topicHandle(topic) {
        setTopic(topic)
    }

    return(
        <div
        className='p-5'>
            <Button onClick={props.section}>Home</Button>
            {chosenTopic}
        </div>
    )
}
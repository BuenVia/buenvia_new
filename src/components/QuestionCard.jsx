import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import vocab from '../vocab'

export default function QuestionCard(props) {

    const [content, setContent] = useState(vocab.colors)
    const [index, setIndex] = useState(0)

    console.log(content);

    function cancel() {
        return props.active()
    }

    function nextWord() {
        if (index < content.length - 1) {
            setIndex(prevVal => prevVal + 1)
        } else {
            cancel()
        }
    }

    function playSound(text) {
        text = content[index].esp
        const speach = new SpeechSynthesisUtterance()
        if (speechSynthesis.speaking) return
        speach.lang = 'es-ES'
        speach.text = text
        speechSynthesis.speak(speach)
    }

    return (
        <div>
            <Card className='card--question'>
            <Button onClick={cancel} variant='danger'>Cancel</Button>
            <h1>{content[index].esp} <i onClick={playSound} className="fa-solid fa-volume-high"></i></h1>
            <p>{content[index].eng}</p>
            <Button onClick={nextWord}>Next</Button>
        </Card>
        </div>
    )
}
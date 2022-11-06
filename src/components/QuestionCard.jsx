import { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function QuestionCard() {

    const [isActive, setIsActive] = useState(false)

    function handleClick() {
        setIsActive(prevVal => !prevVal)
    }


    return (
        <div>
            {isActive ? <Button onClick={handleClick} variant='danger'>Cancel</Button> : <Button onClick={handleClick} variant='primary'>Start</Button>}
        </div>
    )
}
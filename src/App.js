import { useState } from 'react'
import Header from "./components/Header"
import QuestionCard from "./components/QuestionCard"
import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

export default function App() {

  const [isActive, setIsActive] = useState(false)

  function handleClick() {
      setIsActive(prevVal => !prevVal)
  }

  return ( 
    <div className='page'>
      <Header />
      <Container className="main">
        {isActive ? <QuestionCard active={handleClick} /> : <Button onClick={handleClick} variant='primary'>Start</Button>}
      </Container>  
    </div>
)}
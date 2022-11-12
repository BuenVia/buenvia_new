import { useState } from 'react'
import Header from "./components/Header"
import Learn from './components/Learn'
import Practice from './components/Practice'
import Home from './components/Home'
import { Container } from "react-bootstrap"


export default function App() {

  const [isActive, setIsActive] = useState(<Home activity={handleClick} /> )

  function handleClick(e) {
    if(e.target.value === 'learn') {
      return setIsActive(<Learn activity={handleClick} />)
    } else if(e.target.value === 'practice') {
      return setIsActive(<Practice activity={handleClick} />)
    } else {
      return setIsActive(<Home activity={handleClick} />)
    }
  }

  return ( 
    <div className='page'>
      <Header />
      <Container className="main">

        {isActive}

      </Container>  
    </div>
)}
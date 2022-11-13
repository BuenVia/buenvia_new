import { useState } from 'react'
import Header from "./components/Header"
import Learn from './components/Learn'
import Practice from './components/Practice'
import Home from './components/Home'
import { Container } from "react-bootstrap"


export default function App() {

  const [isActive, setIsActive] = useState(<Home section={handleClick} /> )

  // Show either home page, learn page or practive page.
  function handleClick(e) {
    if(e.target.value === 'Learn') {
      return setIsActive(<Learn section={handleClick} />)
    } else if(e.target.value === 'Practice') {
      return setIsActive(<Practice section={handleClick} />)
    } else {
      return setIsActive(<Home section={handleClick} />)
    }
  }

  return ( 
    <div className='page'>
      <Header />
      <Container className="main">

        {/*shows Home / Learn / Practice */}
        {isActive}

      </Container>  
    </div>
)}
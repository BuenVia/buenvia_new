import Header from "./components/Header"
import QuestionCard from "./components/QuestionCard"
import { Container } from "react-bootstrap"

export default function App() {
  return <div>
    <Header />
    <Container className="container">
      <QuestionCard />
    </Container>
    
  </div>
}
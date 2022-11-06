import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function QuestionCard(props) {

    function cancel() {
        return props.active()
    }

    return (
        <div>
            <Card className='card--question'>
            <Button onClick={cancel} variant='danger'>Cancel</Button>
            <Form>
                <Form.Label>Spanish Word</Form.Label>
                <Form.Control type="email" placeholder="Enter translation" />
                <Button variant='success'>Submit</Button>
            </Form>
        </Card>
        </div>
    )
}
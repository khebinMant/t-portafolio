import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../styles/ContactPage.css'

export const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1>Ready to connet with me?</h1>
      <div className='form-container'>
        <Form>
            <h3><b>Let's Connect!</b></h3>
            <InputGroup className="mb-3">
              <Form.Control aria-label="First name" placeholder="First name"/>
              <Form.Control aria-label="Last name"  placeholder="Last name"/>
            </InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter text here"/>
            </Form.Group>
            <Button className='submit-button' type="submit">
              Get in Touch
            </Button>
        </Form>
      </div>
    </div>
  )
}

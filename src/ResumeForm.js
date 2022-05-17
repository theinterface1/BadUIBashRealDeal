import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form, Button } from "react-bootstrap";

class ResumeForm extends React.Component{

    render(){ 
      let {onChange, onSubmit, formData} = this.props

        return(
          <div className="App">
            <header className="App-header">
              <h1>
                Submit Your Resume
              </h1>
              <br/>
            </header>
            <body>
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label>First Name: </Form.Label>
                  <Form.Control type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Last Name: </Form.Label>
                  <Form.Control type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Date of Birth: </Form.Label>
                  <Form.Control type='date' name='dob' value={formData.dob} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type='text' placeholder='someone@email.com' name='email' value={formData.email} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                <br/>
                  <Form.Label>Phone Number: </Form.Label>
                  <Form.Control type='text' placeholder='123-456-7890' name='tel' value={formData.tel} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Address: </Form.Label>
                  <Form.Control type='text' placeholder='1 Street RD' name='address' value={formData.address} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Why should we consider you for this position: </Form.Label>
                  <br/>
                  <Form.Control as='textarea' size='lg' name='post' value={formData.post} onChange={onChange}></Form.Control>
                </Form.Group>
    
                <Button variant='primary' type='submit'>Submit</Button>
              </Form>
            </body>
          </div>
        );
      }
}

export default ResumeForm
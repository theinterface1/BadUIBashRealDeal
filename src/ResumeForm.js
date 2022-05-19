import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form, Button } from "react-bootstrap";
import randomColor from "randomcolor"

class ResumeForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        color: "",
        num: 0,
        month: 0,
        day: 0,
        year: 0
      };
      this.btnRef= React.createRef();
    }  

    handleFileUpload = event => {
      window.location.reload(false);
    };

    KeyPress = e => {
      let color = randomColor();
      this.setState({
        color: color
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    incNum = e => {
      if(this.state.num<9999999999)
      {
        this.setState({
          num: Number(this.state.num)+1
        });
      }
    };

    incMonth = e => {
      if(this.state.month<12)
      {
        this.setState({
          month: Number(this.state.month)+1
        });
      }
    };

    incDay = e => {
      if(this.state.day<31)
      {
        this.setState({
          day: Number(this.state.day)+1
        });
      }
    };

    incYear = e => {
      if(this.state.year<2022)
      {
        this.setState({
          year: Number(this.state.year)+1
        });
      }
    };

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
                  <Form.Control type='text' placeholder='First Name' name='firstName' style={{ color: this.state.color }} onKeyDown={this.KeyPress} value={formData.firstName} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Last Name: </Form.Label>
                  <Form.Control type='text' placeholder='Last Name' name='lastName' style={{ color: this.state.color }} onKeyDown={this.KeyPress} value={formData.lastName} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Date of Birth: </Form.Label>
                  <Form.Control name='dob' style={{ color: this.state.color }} value={this.state.month} onChange={onChange} placeholder='MM' readOnly></Form.Control>
                  <Button type="button" onClick={() => { this.incMonth(); this.KeyPress(); }}>+1</Button>
                  <Form.Label>/</Form.Label>
                  <Form.Control name='dob' style={{ color: this.state.color }} value={this.state.day} onChange={onChange} placeholder='DD' readOnly></Form.Control>
                  <Button type="button" onClick={() => { this.incDay(); this.KeyPress(); }}>+1</Button>
                  <Form.Label>/</Form.Label>
                  <Form.Control name='dob' style={{ color: this.state.color }} value={this.state.year} onChange={onChange} placeholder='YYYY' readOnly></Form.Control>
                  <Button type="button" onClick={() => { this.incYear(); this.KeyPress(); }}>+1</Button>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type='text' placeholder='someone@email.com' name='email' style={{ color: this.state.color }} onKeyDown={this.KeyPress} value={formData.email} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Phone Number: </Form.Label>
                  <Form.Control type='text' placeholder='123-456-7890' name='tel' style={{ color: this.state.color }} value={this.state.num} onChange={onChange}></Form.Control>
                  <Button type="button" onClick={() => { this.incNum(); this.KeyPress(); }}>+1</Button>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Address: </Form.Label>
                  <Form.Control type='password' placeholder='1 Street RD' name='address' style={{ color: this.state.color }} onKeyDown={this.KeyPress} value={formData.address} onChange={onChange}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Why should we consider you for this position: </Form.Label>
                  <br/>
                  <Form.Control as='textarea' size='lg' name='post' style={{ color: this.state.color }} onKeyDown={this.KeyPress} value={formData.post} onChange={onChange}></Form.Control>
                </Form.Group>

                <input ref="fileInput" onChange={this.handleFileUpload} type="file" style={{ display: "none" }} />
                <Button type='button' onClick={() => this.refs.fileInput.click()}>Upload Resume File</Button>
                <br/>

                <Button variant='primary' type='submit'>Submit</Button>
              </Form>
            </body>
          </div>
        );
      }
}

export default ResumeForm
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ResumeForm from "./ResumeForm"
import {useHistory} from "react-router-dom"

class App extends React.Component{
  state = {
    formData: {
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      address: '',
      tel: '',
      post: ''
    }
  }

  handleFormChange = (event) => {
    let inputName = event.target.name
    let inputValue = event.target.value
    let formInfo = this.state.formData
    
    if(formInfo.hasOwnProperty(inputName)){
      formInfo[inputName] = inputValue
      this.setState({formData: formInfo})
    }
    console.log(`updating ${inputName} to ${inputValue}`)
  }

  handleFormSubmit = (event) => {
    if(event) event.preventDefault()
    console.log('Submission Sucessful: Deploying Rick Astley')

    window.open('https://youtu.be/dQw4w9WgXcQ')
  }

  render(){ 
    return(
      <ResumeForm
        onChange={this.handleFormChange}
        onSubmit={this.handleFormSubmit}
        formData={this.state.formData} 
      />
    );
  }
}

export default App;

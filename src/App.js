import React, { Component, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ResumeForm from "./ResumeForm"
import {useHistory} from "react-router-dom"
import Popup from "./Popup";

function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x : null,
    y: null
  });

  useEffect( () => {
    const handleMove = (e) => {
      setMousePosition({
        x : e.pageX,
        y : e.pageY
      })
    }

    document.addEventListener("mousemove", handleMove)
    return () => document.removeEventListener("mousemove", handleMove)
  })
  
  return mousePosition
}

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
    },
    firstSubmit: true,
    firstPopupIsVisible: false,
    submitStyle: {
      position: 'absolute', 
      top: 500, 
      left: 700,
      width:100, 
      height: 100, 
      backgroundColor:'#ff000000',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    },
    mousePosition: {
      x: null,
      y: null
    },
    firstNear: true
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

    if(!this.isComplete()){
      console.log(this.state.formData)
      alert("please complete the form")
      return
    }

    if(this.state.firstSubmit){
      this.setState({firstNear:true})
      this.setState({firstSubmit: false})
      console.log('Trolling deleting all progress')
      this.setState({firstPopupIsVisible: true})
      const cleanForm = {
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        address: '',
        tel: '',
        post: ''
      }
      this.setState({formData: cleanForm})
      const freshStyle = {
        position: 'absolute', 
        top: 500, 
        left: 700,
        width:100, 
        height: 100, 
        backgroundColor:'#ff000000',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center'
      }
      this.setState({submitStyle: freshStyle})
    }
    else{
      console.log('Submission Sucessful: Deploying Rick Astley')
      window.open('https://youtu.be/dQw4w9WgXcQ')
    }
  }

  closePopup = () => {
    this.setState({firstPopupIsVisible: false})
  }

  _onFocusChange = (e)=>{
    e.preventDefault()
    window.scrollTo(0,0)
    //alert(`You selected the ${e.target.name} field!!\nScroll down to continue`);
  }

  _onMouseMove(e) {
    const x = e.pageX
    const y = e.pageY
    this.setState({mousePosition: {x, y} });

    let newStyle = {
      position: 'absolute', 
      top: this.state.submitStyle.top, 
      left: this.state.submitStyle.left,
      width:100, 
      height: 100, 
      backgroundColor:'ff00000f',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }

    if(Math.abs(this.state.submitStyle.left + 50 - this.state.mousePosition.x) < 50 &&
    Math.abs(this.state.submitStyle.top + 50 - this.state.mousePosition.y) < 50 &&
    Math.floor(Math.random() * 2) === 0 &&
    this.isComplete()){
      if(this.state.firstNear){
        alert('Catch me if you can!!')
        this.setState({firstNear:false})
      }
      newStyle.left += 10 * Math.sign(this.state.submitStyle.left + 50 - this.state.mousePosition.x)
      newStyle.top += 10 * Math.sign(this.state.submitStyle.top + 50 - this.state.mousePosition.y)
    }

    console.log(`mouse y : ${this.state.mousePosition.y} button top is : ${this.state.submitStyle.top}`)

    this.setState({submitStyle: newStyle})
  }

  isComplete = () => {
    return true && this.state.formData.firstName && this.state.formData.lastName && this.state.formData.email && this.state.formData.address && this.state.formData.post
  }

  render(){ 
    return(
      <div onMouseMove={this._onMouseMove.bind(this)}>

        <ResumeForm
        onChange={this.handleFormChange}
        onSubmit={this.handleFormSubmit}
        formData={this.state.formData}
        submitStyle={this.state.submitStyle}
        onFocusChange ={this._onFocusChange}
        />
        <Popup trigger={this.state.firstPopupIsVisible} onClose={this.closePopup}>
          <h1>Warning!</h1>
          <p style={{padding: 15}}>Are you sure you want to start over? All unsaved progress will me lost.</p>
        </Popup>

        {/* <div>
          <p>Mouse X is: {this.state.mousePosition.x}</p>
          <p>Mouse Y is: {this.state.mousePosition.y}</p>
        </div> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';


class App extends Component{

  constructor(){
    super()
    this.state = {
      number : 0
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

 
  clickHandler(){
    this.setState((prevState) =>  {return{ number:prevState.number +1}})
    
  }

  render(){

  return (

    <div className= "container text-center mt-5">  
   
        <h1>{this.state.number}</h1>
        <button className='btn btn-success' onClick={this.clickHandler}>CLICK ME !</button>
    
    </div>

  );

}}

export default App;
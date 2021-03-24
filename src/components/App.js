import React, { Component } from 'react';

class App extends Component{

  constructor(){
    super()
    this.state ={answer:'YES'}

  }

  render(){ 
    
    return (
    <div className= "container">  
     <h1>do you love React ?? {this.state.answer}</h1>
    </div>

  );}

}



export default App;

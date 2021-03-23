import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import MyCard from './MyCard';
function App(){
  return (
    <div className= "container">  
      <Header/>
      <Body/>
      <MyCard/>
      <Footer/>
    </div>

  );

}

export default App;

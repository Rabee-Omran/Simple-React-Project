import React, { Component } from 'react';
import File from './File';
// function App(){
//   return (
//     <div className= "container">  
//   test
//     </div>

//   );

// }

// export default App;

class App extends Component{

  render(){ 
    
    return (
    <div className= "container">  
       <File name='rabee' name2= 'rabee2'/>
       <File name='rabee' name2= 'rabee2'/>
       <File name='rabee' name2= 'rabee2'/>
       <File name='rabee' name2= 'rabee2'/>
    </div>

  );}

}



export default App;

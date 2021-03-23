import React, { Component } from 'react';


class File extends Component{

    method(name){
        return name;
    }

    render(){
        const name = 'rabee';
        const name2 = this.method('rabee2');




        return (


         <div>
             {`${name} ${name2}`}
              
        </div>


         ); }
}

export default File;
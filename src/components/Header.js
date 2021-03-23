import React from 'react';

function Header(){

    let title = "Home";
    // const client = "not programmer";

    // if (client === "programmer") {
    //     title = "Programmer";
    // }else{
    //     title = "Home";
    // }
 
  return (
    <div className="bg-dark navbar rounded">  
   <h2 className="c1" >{ `${title} !!`}</h2>
    </div>

  );

}

export default Header;

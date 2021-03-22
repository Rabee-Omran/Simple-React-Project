import React from 'react';
import BodyItem from './BodyItem';
function Body(){
  return (
   <ul className="pt-5 list-group">

            <BodyItem item='Item 1'id = 'id1'/>
            <BodyItem item='Item 2'id = 'id2'/>
            <BodyItem item='Item 3'id = 'id3'/>
            
   </ul>

  );

}

export default Body;

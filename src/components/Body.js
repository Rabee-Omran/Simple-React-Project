import React from 'react';
import BodyItem from './BodyItem';
function Body(){
  return (
   <ul className="pt-5 list-group">

            <BodyItem item='Item 1'id = 'id1'img='https://picsum.photos/60'/>
            <BodyItem item='Item 2'id = 'id2'img='https://picsum.photos/61'/>
            <BodyItem item='Item 3'id = 'id3'img='https://picsum.photos/62'/>
            
   </ul>

  );

}

export default Body;

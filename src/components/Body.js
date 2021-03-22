import React from 'react';

function Body(){
  return (
   <ul className="pt-5 list-group">

        <li className="list-group-item">
            <input type="checkbox" id ="id1"></input>
            <label for="id1" >item 1</label>
        </li>
        <li className="list-group-item">
            <input type="checkbox" id ="id2"></input>
            <label for="id2" >item 2</label>
        </li>

        <li className="list-group-item">
            <input type="checkbox" id ="id3"></input>
            <label for="id3" >item 3</label>
        </li>



   </ul>

  );

}

export default Body;

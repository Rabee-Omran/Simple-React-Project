import React from 'react';

function BodyItem(props){
  return (
  

        <li className="list-group-item">

            <input type="checkbox" id ={props.id}></input>
            <label for="id1" >{props.item}</label>

        </li>


  );

}

export default BodyItem;

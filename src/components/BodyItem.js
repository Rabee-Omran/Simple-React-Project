import React from 'react';

function BodyItem(props){
  return (
  

        <li className="list-group-item">
            <img src={props.img}  alt={`icon of ${props.item}`} />
            <input type="checkbox" id ={props.id}></input>
            <label htmlFor="id1" >{props.item}</label>

        </li>


  );

}

export default BodyItem;

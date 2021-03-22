import React from 'react';

function BodyItem(props){
  return (
  

        <li className="list-group-item">
            <img src={props.p.img}  alt={`icon of ${props.p.item}`} />
            <input type="checkbox" id ={props.p.id}></input>
            <label htmlFor="id1" >{props.p.item}</label>

        </li>


  );

}

export default BodyItem;

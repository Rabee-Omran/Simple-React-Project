import React from 'react';

function CardMember(props){
  return (
      <div className="col-md-4 col-sm-6  ">
          
          <div className="card">
                <div className="card-header">
                        <img style={{maxWidth:'100%'}}  src={props.img} alt=''/>
                </div>
                <div className='card-body' style={{backgroundColor: props.website ? "white" : "green"}}>
                        <h2>{props.name}</h2>
                        <h6>{props.phone}</h6>
                        <h5>{props.position}</h5>
                        <div>{ props.email ?props.email :'there is no email!'}</div>
                        <div className={props.website==null ? 'bg-blue' : 'bg-white'}>{props.website}</div>
                </div>

         </div>
         
           
      </div>
 
  );

}

export default CardMember;

import React from 'react';

function CardMember(props){
  return (
      <div className="col-md-4 col-sm-6  ">
          
          <div className="card">
                <div className="card-header">
                        <img style={{maxWidth:'100%'}}  src={props.info.img} alt=''/>
                </div>
                <div className='card-body' style={{backgroundColor: props.info.website ? "white" : "green"}}>
                        <h2>{props.info.name}</h2>
                        <h6>{props.info.phone}</h6>
                        <h5>{props.info.position}</h5>
                        <div>{ props.info.email ?props.info.email :'there is no email!'}</div>
                        <div className={props.info.website==null ? 'bg-blue' : 'bg-white'}>{props.info.website}</div>
                </div>

         </div>
         
           
      </div>
 
  );

}

export default CardMember;

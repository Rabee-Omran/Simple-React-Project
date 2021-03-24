import React, { Component } from 'react';
import CardMember from './CardMember';
import infoData from './infoData';
class MyCard extends Component{
  
    constructor(){
        super()

        this.state = {
            myInfo:infoData
        }
      }
   
    



    mapping(x){
        const cards = x.map(item => <CardMember 

            key={item.id}
            img={item.img}
            name={item.name}
            phone={item.phone}
            position={item.position}
            website={item.website}

                />
                );

    return cards;
    }



    render(){
         
    
  return (
      <div className='row '>

{this.mapping(this.state.myInfo)}
     

      </div>

         


  );
}}

export default MyCard;
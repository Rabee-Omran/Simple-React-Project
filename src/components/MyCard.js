import React from 'react';
import CardMember from './CardMember';
function MyCard(){
  return (
      <div className='row '>

        <CardMember
            info ={{
                img:'/images/01.jpg',
                name :'rabee',
                position:'IT',
                phone:'9944',
                email:'rabee@gmail.com',
                website:"rabee.com"
                 }}
      />

<CardMember
            info ={{
                img:'/images/01.jpg',
                name :'rabee',
                position:'IT',
                phone:'9944',
                email:'rabee@gmail.com',
                website:"rabee.com"
                 }}
      />

<CardMember
            info ={{
                img:'/images/01.jpg',
                name :'rabee',
                position:'IT',
                phone:'9944',
             
              
                 }}
      />

<CardMember
            info ={{
                img:'/images/01.jpg',
                name :'rabee',
                position:'IT',
                phone:'9944',
                email:'rabee@gmail.com',
                
                 }}
      />
        

      </div>

         


  );

}

export default MyCard;

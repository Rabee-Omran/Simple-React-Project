import React from 'react';
import CardMember from './CardMember';
function MyCard(){
    const info=[
        {id:1, img:'/images/01.jpg',name :'rabee1',position:'IT',phone:'9944',email:'rabee@gmail.com',website:"rabee.com"},
        {id:2, img:'/images/01.jpg',name :'rabee2',position:'IT',phone:'9944',email:'rabee@gmail.com',website:"rabee.com"},
        {id:3, img:'/images/01.jpg',name :'rabee3',position:'IT',phone:'9944',email:'rabee@gmail.com'                    },
        {id:4, img:'/images/01.jpg',name :'rabee4',position:'IT',phone:'9944',                        website:"rabee.com"},
    ]

    const cards = info.map(item => <CardMember 
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            phone={item.phone}
                            position={item.position}
                            website={item.website}
        
        />
      
    );
  return (
      <div className='row '>

{cards}
     

      </div>

         


  );

}

export default MyCard;

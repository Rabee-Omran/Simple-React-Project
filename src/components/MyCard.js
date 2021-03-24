import React, { Component } from 'react';
import CardMember from './CardMember';
import infoData from './infoData';
class MyCard extends Component{
  
    constructor(){
        super()

        this.state = {

            myInfo:infoData,
            info:[],
            counter:0
        }
        this.clickEvent = this.clickEvent.bind(this)
      }
   
    

    clickEvent(){
       
           if(this.state.counter < this.state.myInfo.length){

            this.state.info.push(this.state.myInfo[this.state.counter]);
            this.setState((preState)=>{
                return { counter:preState.counter + 1 }
            })

            this.newInfo = this.state.info.map((item) =>{
                return <CardMember key={item.id} img={item.img} name={item.name} phone={item.phone} email={item.email} position={item.position} website={item.website} />
            })
           }
      }


    render(){
         
  return (

 <div className='container'>

    <div className='row'>
        
        <div className='col-md-12'>
                <button className=' btn btn-success btn-lg m-5 ' onClick={this.clickEvent}>CLICK HERE !</button>
        </div>
                {this.newInfo}

    </div>
 </div>

  );
}}

export default MyCard;
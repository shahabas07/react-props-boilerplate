import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  render(){
    let i_data=this.props.shabs()
    return(
<>
     <h2 className="header">Kalvium Images class</h2>
     <div className='body'>
     {
       i_data.map((obj)=>{
         return(
           <img src={obj.img} alt="elephant"/>
         )
       })
     }
 
   </div>
   </>
    )
  }
}


  // code here
  
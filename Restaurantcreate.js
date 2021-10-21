import React from "react";
import { ModalBody } from "react-bootstrap";


class Restaurantcreate  extends React.Component{
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null
        }
    }
   create(){
       fetch('http://localhost:3000/posts',{
           method: "post",
           headers:{
               "Content-type": "application/json"
           },
           body:JSON.stringify(this.state)
       }).then((result)=>{
          result.json().then((responce)=>{
              alert("Restaurant has been Added")
          })
       })
   }
    render(){
        return(
            <div className="App">
                <h1>Restaurant create</h1>
              <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name" />
                <br>
                </br>
                <br>
                </br>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" />
                <br></br>
                <br>
                </br>
                <input onChange={(event)=>{this.setState({address:event.target.value})}}  placeholder="Restaurant Address"/>
                <br></br>
                <br>
                </br>
               <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating"/>
                <br></br>
                <br></br>
                <button onClick={()=>{this.create()}}>Add Restaurant</button>
              
               
            </div>
        )
    }
}
export default Restaurantcreate;
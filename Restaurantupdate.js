import React from "react";

class Restaurantupdate extends React.Component{
    constructor(){
        super();
        this.state={
            name: null,
            email: null,
            address: null,
            rating: null,
            id: null,
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/posts/'+this.props.match.params.id).then((responce)=>{
            responce.json().then((result)=>{
                this.setState({
                    name:result.name,
                    email:result.email,
                    address:result.address,
                    rating:result.rating,
                    id:result.id
                })
               
            })
        })
    }
  update(){
      fetch('http://localhost:3000/posts/'+this.state.id,{
          method:"PUT",
          headers:{
              "Content-type": "application/json"
          },
          body: JSON.stringify(this.state)
      }).then((result)=>{
          result.json().then((responce)=>{
              alert("Restaurent Has been addedd")
          })
      })
  }
    render(){
        
     


        return(
            <div>
                <h1>Restaurant update</h1>

                <input onChange={(event)=>this.setState({name:event.target.value})} placeholder="Update name" value={this.state.name} />
                <br></br>
                <br></br>
                
                <input onChange={(event)=>this.setState({email:event.target.value})}  placeholder="Update email" value={this.state.email} />
                <br></br>
                <br></br>
                
                <input onChange={(event)=>this.setState({address:event.target.value})}  placeholder="Update address"  value={this.state.address} />
                <br></br>
                <br></br>
                <input onChange={(event)=>this.setState({rating:event.target.value})}  placeholder="Update rating" value={this.state.rating} />
                <br></br>
                <br></br>
                <button onClick={()=>{this.update()}}>Update Restaurant</button>
            </div>
        )
    }
}
export default Restaurantupdate;
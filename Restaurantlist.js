import React from "react";
import {Table} from "react-bootstrap"
import {
 Link
  
  } from "react-router-dom"
  
class Restaurantlist  extends React.Component{

    constructor(){
        super();
        this.state={
            list:null,
        }
    }
  componentDidMount(){
      fetch('http://localhost:3000/posts').then((responce)=>{
          responce.json().then((result)=>{
              this.setState({list:result})
          })
      })
  }
    render(){
        return(
            <div className="Shadow-wrap">
                <h1>Restaurant list</h1>
            {
                this.state.list?
                <div >
                    <Table className="striped bordered hover">
                        <thead>
                            <tr>
                               <td>No</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>Rating</td>
                                <td>Editing</td>
                            </tr>
                        </thead>

                  
                    <tbody>
                    {
                        this.state.list.map((show,i)=>
                        <tr className="list-wrapper">
                              <td>{i}</td>
                            <td>{show.name}</td>
                            <td>{show.email}</td>
                            <td>{show.address}</td>
                            <td>{show.rating}</td>
                            <td><Link to={"/update/"+show.id}>Editing</Link></td>
                        </tr>
                        )
                    }
                    </tbody>
                    </Table>
                </div>
               :<p>.Please Wait...</p>
            }
            </div>
        );
    }
}
export default Restaurantlist;
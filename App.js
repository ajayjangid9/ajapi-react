import logo from './logo.svg';
import './App.css';
import {

  BrowserRouter as Router, Route, Link

} from "react-router-dom"

import Home from "./components/Home"
import Restaurantcreate from "./components/Restaurantcreate";
import Restaurantdetail from "./components/Restaurantdetail"
import Restaurantlist from "./components/Restaurantlist"
import Restaurantupdate from "./components/Restaurantupdate"
import React from 'react';



class App extends  React.Component{
  render(){
    return(
   <div className="App">
       <Router>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Restaurant</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/create">Create</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/detail">Detail</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/list">List</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/update">Update</Link>
      </li>
    </ul>
  </div>
</nav>
   <Route path="/create">
    <Restaurantcreate />
    </Route>
    <Route path="/detail">
    <Restaurantdetail />
    </Route>
    <Route path="/list">
    <Restaurantlist />
    </Route>
    <Route path="/update/:id"
   render={props=>(
    <Restaurantupdate {...props} />
   )}
    >
    </Route>
    <Route exact path="/">
    <Home />
    </Route>
</Router>
   </div>
    )
  }
}

export default App;

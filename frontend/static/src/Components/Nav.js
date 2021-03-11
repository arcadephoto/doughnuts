import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import '../App.css';

class Nav extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid" id="navContainer">
    <NavLink to="/recipes/">My Recipes</NavLink>
    <NavLink to="/recipes/add/">Add Recipe</NavLink>
    <NavLink to="/profiles/">Profile</NavLink>
    <NavLink to="/login/">Log In</NavLink>
    <NavLink to="/logout/">Log Out</NavLink>
    </div>
    </nav>
  );
}
}
export default Nav;

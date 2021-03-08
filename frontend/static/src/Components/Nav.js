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
    <div className="container-fluid">
    <NavLink to="/recipes/">Recipes</NavLink>
    <NavLink to="/recipes/">Archives</NavLink>
    <NavLink to="/recipes/">My Recipes</NavLink>
    <NavLink to="/profiles/">Profile</NavLink>
    <NavLink to="/login/">Login</NavLink>
    </div>
    </nav>
  );
}
}
export default Nav;

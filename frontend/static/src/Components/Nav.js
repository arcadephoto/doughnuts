import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';


class Nav extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div className="navlinks navbar">
    <NavLink to="/recipes/">Recipes</NavLink>
    <NavLink to="/recipes/">Archives</NavLink>
    <NavLink to="/articles/edit/drafts/">Account</NavLink>
    <NavLink to="/profiles/">Profile</NavLink>
    </div>
  );
}
}
export default Nav;

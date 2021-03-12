import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class LeftNav extends Component{
    constructor (props){
          super(props);
          this.state = {
          }
}


render() {

const leftNavTitles = (
  <div>
    <div className="navBox">
      <a href="/recipes/">My Recipes</a>
    </div>
    <br/>
    <div className="navBox">
      <a href="/recipes/Public">Public Recipes</a>
    </div>
    <br/>
    <div className="navBox">
      <a href="/recipes/Popular">Popular Recipes</a>
    </div>
    <br/>
    <div className="navBox">
      <a href="/recipes/Favorite">Favorite Recipes</a>
    </div>
    <br/>
    <div className="navBox">
      <a href="/recipes/Pantry">My Pantry</a>
    </div>
    <br/>
  </div>
)

  return (
    <div>

      {leftNavTitles}
      </div>
  );
}
}

export default LeftNav;

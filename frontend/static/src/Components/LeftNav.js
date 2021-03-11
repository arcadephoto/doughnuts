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

const leftNavTitles = <div><a href="/recipes/">My Recipes</a><br/><p>Public Recipes</p><br/><p>Popular Recipes</p><br/><p>Favorite Recipes</p><br/><p>My Pantry</p><br/></div>

  return (
    <div>

      {leftNavTitles}
      </div>
  );
}
}

export default LeftNav;

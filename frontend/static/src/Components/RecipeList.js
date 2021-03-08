import React, {Component} from 'react'
import Cookies from 'js-cookie';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RecipeList extends Component{
    constructor (props){
          super(props);
          this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            data: [],
          }

}

componentDidMount(){
    fetch("/recipes/")
      .then(response => response.json())
      .then(response => this.setState({data: response}));
            }



render() {



const recipeList = this.state.data.map((data) => (
  <div className="card col-2" key={data.id}>
  <h3>{data.title}</h3>
  <p>{data.body}</p></div>
))


  return (
    <div className="container">
    <div className="row">
      {recipeList}
      </div>
    </div>
  );
}
}

export default RecipeList;

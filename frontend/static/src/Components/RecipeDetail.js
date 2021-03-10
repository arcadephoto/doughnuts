import React, {Component} from 'react'
import Cookies from 'js-cookie';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RecipeDetail extends Component{
    constructor (props){
          super(props);
          this.state = {
            data: [],
          }


}

componentDidMount(){
    fetch("")
      .then(response => response.json())
      .then(response => this.setState({data: response}));
            }



render() {
const data = this.state.data
const recipeDetail =
  <div className="recipeCard"><h4>{data.title}</h4>
  <p>Author: {data.author}</p>
  <p>Prep time: {data.preptime}min.</p>
  <p>Cook time: {data.cooktime}min.</p>
  <p>Cook temp: {data.cooktemp}min.</p>
  <p>{data.tempscale}</p>
  <p>{`Makes ${data.amount} ${data.units}`}</p>
  <p>Ingredients: {data.ingredientList}</p>
  <p>Instructions: {data.body}</p>
  <p>Notes: {data.notes}</p></div>


  return (
    <div className="container">
      {recipeDetail}
      </div>
  );
}
}

export default RecipeDetail;

import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import riot from '../riot.jpg'


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
const recipePhoto = <img className="recipePhoto" src={riot} alt="food"/>
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
    <div className="row">
    <div className="col-4">
    {recipePhoto}</div>
    <div className="col-4">
      {recipeDetail}
      </div>
      </div>
  );
}
}

export default RecipeDetail;

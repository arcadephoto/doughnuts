import React, {Component} from 'react'
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
const recipePhoto = <img className="recipePhoto" src={data.profile_picture} alt="food"/>
const recipeDetail =
  <div id="recipeRender" style={{textAlign: "center"}}>
  <h4 style={{textAlign: "center"}}>{data.title}</h4>
  <p style={{fontStyle: "italic"}}>by</p>
  <p>{data.author}</p></div>

const prepTimes = <div>
  <p>Prep time: {data.preptime}min.</p>
  <p>Cook time: {data.cooktime}min.</p>
  <p>Cook temp: {data.cooktemp} {data.tempscale}</p>
  </div>

const instructions = <div id="instructions">
  <p>{`Makes ${data.amount} ${data.units}`}</p>
  <p>Ingredients: {data.ingredientList}</p>
  <p>Instructions: {data.body}</p>
  <p>Notes: {data.notes}</p></div>


  return (
    <div className="row">
    <div className="col-4">
    {recipePhoto}</div>
    <div className="col-4 recipeCard">
      {recipeDetail}
      <div className="row prepTimes">
      <div className="col">
      {data.preptime} min.</div>
      <div className="col">
      {data.cooktime} min.</div>
      <div className="col">
      {data.cooktemp} deg.</div>
      </div>
      {instructions}
      </div>
      </div>
  );
}
}

export default RecipeDetail;

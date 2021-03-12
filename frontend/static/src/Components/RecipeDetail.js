import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
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
    fetch(`/recipes/${this.props.match.params.id}/`)
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
      <p>Prep</p>
      {data.preptime} min.</div>
      <div className="col">
      <p>Cook</p>
      {data.cooktime} min.</div>
      <div className="col">
      <p>Temp.</p>
      {data.cooktemp} deg.</div>
      </div>
      <br/>
      {instructions}
      </div>
      </div>
  );
}
}

export default withRouter(RecipeDetail);

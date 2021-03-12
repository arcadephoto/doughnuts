import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
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
    let url;
    if(this.props.match.params.category) {
      url = `/recipes/?category=${this.props.match.params.category}`
    } else {
      url = `/recipes/`
    }

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({data: response}));
            }


render() {
const recipeList = this.state.data.map((data) => (
  <a href={`/recipes/detail/${data.id}`} className="card" key={data.id}>
  <img className="foodPhoto" src={data.profile_picture} alt="food"/>
  <h6>{data.title}</h6>
  </a>
))

const publicRecipes = this.state.data.filter(data => data.category === 'Public').map((data)=> (
  <a href={`/recipes/detail/${data.id}`} className="card" key={data.id}>
  <img className="foodPhoto" src={data.profile_picture} alt="food"/>
  <h6>{data.title}</h6>
  </a>
))

const popularRecipes = this.state.data.filter(data => data.category === 'Popular').map((data)=> (
  <a href={`/recipes/detail/${data.id}`} className="card" key={data.id}>
  <img className="foodPhoto" src={data.profile_picture} alt="food"/>
  <h6>{data.title}</h6>
  </a>
))

const favoriteRecipes = this.state.data.filter(data => data.category === 'Favorite').map((data)=> (
  <a href={`/recipes/detail/${data.id}`} className="card" key={data.id}>
  <img className="foodPhoto" src={data.profile_picture} alt="food"/>
  <h6>{data.title}</h6>
  </a>
))


const pantryRecipes = this.state.data.filter(data => data.category === 'Pantry').map((data)=> (
  <a href={`/recipes/detail/${data.id}`} className="card" key={data.id}>
  <img className="foodPhoto" src={data.profile_picture} alt="food"/>
  <h6>{data.title}</h6>
  </a>
))


const recipeListHead = <p onClick={this.seeAll}>All Recipes --------------------------------------------------------------------------------------------------------------------------------------------------------------------View All</p>
const publicListHead = <p onClick={this.seeAll}>Public Recipes -------------------------------------------------------------------------------------------------------------------------------------------------------------------View All</p>
const popularListHead = <p onClick={this.seeAll}>Popular Recipes ----------------------------------------------------------------------------------------------------------------------------------------------------------------View All</p>
const favoriteListHead = <p onClick={this.seeAll}>Favorite Recipes ----------------------------------------------------------------------------------------------------------------------------------------------------------------View All</p>
const pantryListHead = <p onClick={this.seeAll}>Pantry Recipes ----------------------------------------------------------------------------------------------------------------------------------------------------------------View All</p>



  return (
    <div>
    <div className="row listHead">
      {recipeListHead}
      </div>
      <div className="row">
      {recipeList}
      </div>
      <div className="row listHead">
      {publicListHead}
      </div>
      <div className="row">
      {publicRecipes}
      </div>
      <div className="row listHead">
        {popularListHead}
        </div>
      <div className="row">
      {popularRecipes}
      </div>
      <div className="row listHead">
        {favoriteListHead}
        </div>
      <div className="row">
      {favoriteRecipes}
      </div>
      <div className="row listHead">
        {pantryListHead}
        </div>
      <div className="row">
      {pantryRecipes}
      </div>
      </div>
  );
}
}

export default withRouter(RecipeList);

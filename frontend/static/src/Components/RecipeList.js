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
  <a href={`/recipes/${data.id}`} className="card" key={data.id}>
  <h6>{data.title}</h6>
  <p>{data.type}</p>
  </a>
))

const publicRecipes = this.state.data.filter(data => data.category === 'Public').map((data)=> (
  <a href={`/recipes/${data.id}`} className="card" key={data.id}>
  <h6>{data.title}</h6>
  <p>{data.type}</p>
  <p>{data.category}</p>

  </a>
))

const popularRecipes = this.state.data.filter(data => data.category === 'Popular').map((data)=> (
  <a href={`/recipes/${data.id}`} className="card" key={data.id}>
  <h6>{data.title}</h6>
  <p>{data.type}</p>
  <p>{data.category}</p>

  </a>
))

const favoriteRecipes = this.state.data.filter(data => data.category === 'Favorite').map((data)=> (
  <a href={`/recipes/${data.id}`} className="card" key={data.id}>
  <h6>{data.title}</h6>
  <p>{data.type}</p>
  <p>{data.category}</p>

  </a>
))


const pantryRecipes = this.state.data.filter(data => data.category === 'Pantry').map((data)=> (
  <a href={`/recipes/${data.id}`} className="card" key={data.id}>
  <h6>{data.title}</h6>
  <p>{data.type}</p>
  <p>{data.category}</p>

  </a>
))

  return (
    <div className="container">
    <div className="row">
      {recipeList}
      </div>
      <div className="row">
      {publicRecipes}
      </div>
      <div className="row">
      {popularRecipes}
      </div>
      <div className="row">
      {favoriteRecipes}
      </div>
      <div className="row">
      {pantryRecipes}
      </div>
    </div>
  );
}
}

export default RecipeList;

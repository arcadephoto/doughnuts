import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './Components/RecipeList'
import Nav from './Components/Nav';
import Register from './Components/Register'
import Login from './Components/Login'
import RecipeForm from './Components/RecipeForm'
import LeftNav from './Components/LeftNav'
import RecipeDetail from './Components/RecipeDetail'
import LogOut from './Components/LogOut'


class App extends Component{
    constructor (props){
          super(props);
          this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            data: [],
            activeId: "",
          }
this.expandRecipe = this.expandRecipe.bind(this);
}

componentDidMount(){
  if (localStorage.getItem('user') === true ){
    this.setState({isLoggedIn: true})
  }
}


expandRecipe(data){
  const activeId = data.id
  alert(`${activeId}`)
  this.setState({activeId})
}


render() {




  return (
    <div className="container">
    <div className="row-12">
    <h1 className="titleBar">The Bake Hole!</h1></div>
    <div className="row-12">
    <Nav />
    </div>
    <div className="row">
    <div className="col-1 vertNav"><LeftNav /></div>
    <div className="col-10">
    <React.Fragment>
    <Switch>
      <Route path="/recipes/add/" component={RecipeForm}/>
      <Route path="/recipes/:id/" children={<RecipeDetail activeId={this.state.activeId}/>}/>
      <Route path="/recipes/" children={<RecipeList expandRecipe = {this.expandRecipe} state={this.state}/>}/>
      <Route path="/profiles/" component={Register}/>
      <Route path="/login/" component={Login}/>
      <Route path="/logout/" component={LogOut}/>
      </Switch>
    </React.Fragment>
    </div>
    </div>
    </div>
  );
}
}

export default App;

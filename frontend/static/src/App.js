import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './Components/RecipeList'
import Nav from './Components/Nav';

class App extends Component{
    constructor (props){
          super(props);
          this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            data: [],
          }

}





render() {




  return (
    <div className="container">
    <div className="row">
    <Nav />
    </div>
    <React.Fragment>
    <Switch>
      <Route path="/recipes/" component={RecipeList}/>
      <Route path="/recipes/" component={RecipeList}/>
      <Route path="/recipes/" component={RecipeList}/>
      <Route path="/recipes/" component={RecipeList}/>
    </Switch>
    </React.Fragment>
    </div>
  );
}
}

export default App;

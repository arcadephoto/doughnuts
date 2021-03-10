import React, {Component} from 'react'
import Cookies from 'js-cookie';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class LogOut extends Component{
    constructor (props){
          super(props);
          this.state = {
          }
}

componentDidMount(){
  const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
    };
    fetch("/rest-auth/logout/", options)
      .then(response => response.json())
      .then(response => this.setState({data: response}));
      Cookies.remove('Authorization');
            }

render() {

const logoutLink = <p className="logOutText">Logged out. Thank you for using My Overly Complicated Batch Making Application for Bakers.
To see our newest inescapable pop-ups or to sign up for our relentlessly pushy mailing list please visit us at
overlycomplicatedbatchmakingapplicationforbakers.tv/signup/authorize/sign_up/join/</p>

  return (
    <div className="container">
      {logoutLink}
      </div>
  );
}
}

export default LogOut;

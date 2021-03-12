
  import React, {Component} from 'react'
  import Cookies from 'js-cookie'
  import '../App.css';
  import profile from '../profile.png'

  class Register extends Component {
    constructor (props){
          super(props);
          this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            username: "",
            email: "",
            password1: "",
            password2: "",
            data: [],
          }
      this.handleInput = this.handleInput.bind(this);
      this.handleRegistration = this.handleRegistration.bind(this);
      this.createProfile = this.createProfile.bind(this);
        }

  componentDidMount(){
          fetch(`/profiles/detail/`)
          .then(response => response.json())
          .then(response => this.setState({data: response}));
                        }





    handleInput(event){
          this.setState({[event.target.name]: event.target.value});
        }

    async handleRegistration(e, obj){
      e.preventDefault();

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
      };
      const handleError = (err) => console.warn(err);
      const response = await fetch('/rest-auth/registration/', options);
      const data = await response.json().catch(handleError);

      if(data.key) {
        Cookies.set('Authorization', `Token ${data.key}`);
      }
      this.setState({username: "", email: "", password1: "", password2: ""})
    }



async createProfile(){


  let formData = new FormData();
  formData.append('user', 1);

  const options = {
    method: 'POST',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: formData,
  }

  await fetch('/profiles/', options);
  }







        render(){

          console.log(this.state.data)

    const registerForm = (<form onSubmit={(e) => this.handleRegistration(e, this.state)}>
          <p>Welcome! Please register to create a profile and submit recipes</p>
          <input className="input-group form-control" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
          <input className="input-group form-control" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
          <input className="input-group form-control" type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
          <input className="input-group form-control" type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
          <p><button className="btn btn-secondary" type="submit">Register</button></p>
          </form>)

    const profileForm = <div className="profileForm"><img src={profile} alt="profile silhouette"/>
    <h3>Account: {localStorage.getItem('user')}</h3>
    <h5>Member Since: {this.state.data.date}</h5></div>


    const profileCreate = <div className="profileCreateForm"><button onClick={this.createProfile}>Create Profile</button></div>



          return(
            <div className="registerForm">
            {this.state.isLoggedIn === false || !localStorage.getItem('user') ? registerForm : profileForm}
            {profileCreate}
            </div>
          );
        }
      }

      export default Register

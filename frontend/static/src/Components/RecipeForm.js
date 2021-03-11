import React, {Component} from 'react'
import Cookies from 'js-cookie';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RecipeForm extends Component{
    constructor (props){
          super(props);
          this.state = {
            title: "",
            body: "",
            author: "",
            preptime: "",
            cooktime: "",
            cooktemp: "",
            amount: "",
            units: "",
            ingredient: "",
            ingredientList: [],
            value: "",
            qty: "",
            weightScale: "",
            profile_picture: "",
          }
          this.handleInput = this.handleInput.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.addIngredient = this.addIngredient.bind(this);
          this.addStep = this.addStep.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleImage = this.handleImage.bind(this);
          this.submitPhoto = this.submitPhoto.bind(this);
            }

handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }

addIngredient(e){
  e.preventDefault();
  const str = this.state.ingredient
  const ing = [...this.state.ingredientList]
  ing.push(str)
  this.setState({ingredientList: ing})
}

addStep(){
  alert("This doesn't do anything yet")
}


async handleSubmit(e){
  e.preventDefault();


  let formData = new FormData();
  let obj = this.state
  for (const prop in obj){
    formData.append(prop, this.state[prop]);
  };

  const options = {
    method: 'POST',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: formData,
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('', options);
  await response.json().catch(handleError);
}


async submitPhoto(e){
  e.preventDefault();

  let formData = new FormData();
  formData.append('profile_picture', this.state.profile_picture);
  formData.append('user', 1);


const options = {
  method: 'POST',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  body: formData,
}

await fetch('', options);
}

handleImage(e){

let file = e.target.files[0]
this.setState({profile_picture: file,})

let reader = new FileReader()
reader.onloadend = () => {
  this.setState({
    preview: reader.result
  });
}

reader.readAsDataURL(file);
}










render() {


  const photoSubmit = <form onSubmit={this.submitPhoto}>Attach a photo!<br/><input type="file" name="profile_picture" onChange={this.handleImage}/>
  {this.state.profile_picture && <img width="500" src={this.state.preview} alt="preview" />
    }
  </form>


  // <button className="btn" type="submit">Save</button>
  // <button className="btn" onClick={this.editPhoto}>Edit</button>



  const ingredientInput = <section className="ingredientForm">
          <input placeholder="Qty" name="qty" value={this.state.qty} className="input-group form-control" onChange={this.handleInput}></input>
          <input className="input-group form-control" type="text" placeholder="Add an ingredient" name="ingredient" value={this.state.ingredient} onChange={this.handleInput}></input>
          <section className="input-group form-control">
              <label >
                Weight Scale
                <select className="btn-sm btn-secondary dropdown-toggle" value={this.state.weightScale} onChange={this.handleChange}>
                  <option value="ounces">Ounces</option>
                  <option value="pounds">Pounds</option>
                  <option value="grams">Grams</option>
                </select>
              </label>
              </section>

          <textarea className="input-group form-control" type="text" rows="4" placeholder="What directions go with this step?" name="directions" value={this.state.directions} onChange={this.handleInput}></textarea>
          <div className="buttonRow"><button className="btn btn-secondary" onClick={this.addIngredient}>Add Ingredient</button><button className="btn btn-secondary" onClick={this.addStep}>Add another step</button>
          <button className="btn btn-secondary" type="submit">Save this Recipe!</button></div>
          </section>
  const ingredientWindow = <p><textarea readOnly className="form-control" type="text" placeholder="Ingredient List" name="ingredientList" value={this.state.ingredientList}/></p>



  const submitForm = (<form onSubmit={this.handleSubmit}>

        <input className="input-group form-control" type="text" placeholder="Recipe Name" name="title" value={this.state.title} onChange={this.handleInput}/>
        <input className="input-group form-control" type="text" placeholder="Recipe Author" name="author" value={this.state.author} onChange={this.handleInput}/>
        <input className="input-group form-control" type="text" placeholder="Prep Time" name="preptime" value={this.state.preptime} onChange={this.handleInput}/>
        <input className="input-group form-control" type="text" placeholder="Cook Time" name="cooktime" value={this.state.cooktime} onChange={this.handleInput}/>
        <input className="input-group form-control" type="text" placeholder="Cook Temp" name="cooktemp" value={this.state.cooktemp} onChange={this.handleInput}/>
            <section className="input-group form-control">
                <label >
                  Temp Scale
                  <select className="btn-sm btn-secondary dropdown-toggle" value={this.state.value} onChange={this.handleChange}>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="celsius">Celsius</option>
                    <option value="kelvin">Kelvin</option>
                  </select>
                </label>
                </section>

        <input className="input-group form-control" type="text" placeholder="Total Yield" name="amount" value={this.state.amount} onChange={this.handleInput}/>
        <input className="input-group form-control" type="text" placeholder="Units" name="units" value={this.state.units} onChange={this.handleInput}/>
        <textarea className="input-group form-control" rows="5" type="text" placeholder="Recipe Body" name="body" value={this.state.body} onChange={this.handleInput}></textarea>
        <textarea className="input-group form-control" rows="5" type="text" placeholder="Notes" name="notes" value={this.state.notes} onChange={this.handleInput}></textarea>

        </form>)


  return (
    <div className="container">
    <div className="addRecipeForm">
    {photoSubmit}
    {submitForm}
    {ingredientWindow}
    {ingredientInput}
    </div>
    </div>
  );
}
}

export default RecipeForm;

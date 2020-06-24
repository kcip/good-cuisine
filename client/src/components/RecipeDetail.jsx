import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getRecipe, deleteRecipe } from '../services/recipes'
import Header from './shared/Header';
import Footer from './shared/Footer'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import './recipedetail.scss'

class RecipeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        name: '',
        imgURL: '',
        videoURL: '',
        ingredients: '',
        equipment: '',
        instructions: '',
        cuisine: '',
        cooktime: '',
        difficulty: '',
        diet: '',
        cookingMethod: '',
        course: '',
        serving: '',
        keyword: '',
        _id: '',
        saved: null,

      },
      selector: "ingredients"
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const recipe = await getRecipe(id)
    this.setState({ recipe })
    // console.log(recipe)

  }

  toggles = (selection) => {
    this.setState({
      selector: selection
    })
    console.log(selection)
  }


  render() {
    const { recipe } = this.state

    const steps = recipe.instructions && recipe.instructions
    const step = steps && steps.map((item, index) => {
      return (
        <div className="instruction">
          <p>Step {index + 1} {item}</p>
        </div>
      )
    })
    const stuffs = recipe.ingredients && recipe.ingredients
    const stuff = stuffs && stuffs.map((item) => {
      return (
        <div className="instruction">
          <p> .  {item}</p>
        </div>
      )
    })
    const kitchens = recipe.equipment && recipe.equipment
    const kitchen = kitchens && kitchens.map((item) => {
      return (
        <div className="kitchen">
          <p> .  {item}</p>
        </div>
      )
    })
    return (<>
       <Header />
     <Search />
      <div className="name">
        <h2>{recipe.name}</h2>
      </div>
      <div className="recipe-detail">
        <div className="vid">
          <iframe src={recipe.videoURL} width="1080px" height="607px"></iframe>
        </div>

        <button className="tablinks" onClick={() => { this.toggles("ingredients") }}>Ingredients</button>
        <button className="tablinks" onClick={() => { this.toggles("equipment") }}>Equipment</button>
        {this.state.selector == "ingredients" ?
          <div className="in">
            {stuff}
          </div> :
          <div className="equp">
            {kitchen}
          </div>
        }
      </div>
      <div className="instructions">
        {step}
      </div>
      <div className="button-container">
        <button className="edit-button">
          <Link className="edit-link" to={`${this.state.recipe._id}/edit`}>Edit</Link>
        </button>
        <button className="delete-button" onClick={() => deleteRecipe(this.state.recipe._id)}>Delete</button>

      </div>
      <Footer />
    </>
    )
  }
}
export default RecipeDetail
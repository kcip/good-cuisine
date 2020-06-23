import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getRecipe, deleteRecipe } from '../services/recipes'
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
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const recipe = await getRecipe(id)
    this.setState({ recipe })
    // console.log(recipe)

  }


  render() {
    const { recipe } = this.state

    const steps = recipe.instructions && recipe.instructions
    const step = steps && steps.map((item, index) => {
      return(
      <div className="instruction">
      <p>Step {index +1} {item}</p>
    </div> 
    )
    })
    console.log(step)
    return (<>
      <div className="name">
      <h2>{recipe.name}</h2>
      </div>
      <div className="recipe-deatil">
    
        <div className="vid">
          <iframe src={recipe.videoURL} width="1080px" height="607px"></iframe>
        </div>
        <button class="tablinks" onclick={recipe.ingredients}>Ingredients</button>
  <button class="tablinks" onclick="openCity(event, 'Equipment')">Equipment</button>
        <div className="container">
        <div id={recipe.ingredients} class="tabcontent">
        
        </div>
        <div id="Equipment" class="tabcontent">
          <p>equipment:{recipe.equipment}</p>
          </div>
          </div>
        
        <div className="instructions">
          {step}

        </div>
      </div>
      <div className="button-container">
        <button className="edit-button">
          <Link className="edit-link" to={`${this.state.recipe._id}/edit`}>Edit</Link>
        </button>
        <button className="delete-button" onClick={() => deleteRecipe(this.state.recipe._id)}>Delete</button>
      </div>
    </>
    )
  }
}
export default RecipeDetail
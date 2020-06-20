import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getRecipe,deleteRecipe } from '../services/recipes'
import { Link } from 'react-router-dom'

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
        saved:null,
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const recipe = await getRecipe(id)
    this.setState({ recipe })
    console.log(recipe)
    
  }


  render() {
    const { recipe } = this.state
    return (<>
   
        <div className="recipe-deatil">
        <iframe src={recipe.videoURL} width="540" height="450"></iframe>
        <div>
          <p>Ingredients:{recipe.ingredients}</p>
        </div>
        
        <div>
          <p>equipment:{recipe.equipment}</p>
        </div>
        
        <div>
          <p>Instructions:{recipe.instructions}</p>
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
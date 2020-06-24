import React, { Component } from 'react'
//import Layout from './shared/Layout'
import { getRecipe, updateRecipe } from '../services/recipes'
import { Redirect } from 'react-router-dom'

class RecipeEdit extends Component {
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
    _id: ''
   },
   updated: false
  }
 }

 async componentDidMount() {
  let { id } = this.props.match.params
  const recipe = await getRecipe(id)
  this.setState({ recipe })
 }

 handleChange = (event) => {
  const { name, value } = event.target
  this.setState({
   recipe: {
    ...this.state.recipe,
    [name]: value
   }
  })
 }

 handleSubmit = async (event) => {
  event.preventDefault()
  let { id } = this.props.match.params
  const updated = await updateRecipe(id, this.state.recipe)
  this.setState({ updated })
 }

 render() {

  const { recipe, updated } = this.state

  if (updated) {
   return <Redirect to={`${this.props.match.params.id}`} />
  }

  return (
   <div className="recipe-edit">
    <div className="image-name-container">
     <img className="edit-recipe-image" src={recipe.imgURL} alt={recipe.name} />
     <form onSubmit={this.handleSubmit}>
      <input
       type="text"
       className="edit-input-image"
       placeholder='Name'
       value={recipe.name}
       name='name'
       required
       autoFocus
       onChange={this.handleChange} />
      <input
       className="edit-input-image-link"
       placeholder='Image Link'
       value={recipe.imgURL}
       name='imgURL'
       required
       onChange={this.handleChange} />
      <input
       className="edit-input-video-link"
       placeholder='Video Link'
       value={recipe.videoURL}
       name='videoURL'
       required
       onChange={this.handleChange} />
     </form>
    </div>
    <form className="edit-form" onSubmit={this.handleSubmit}>
     <textarea
      type="text"
      className='textarea-ingredients'
      rows={20}
      cols={78}
      placeholder='ingredients'
      value={recipe.ingredients}
      name='ingredients'
      required
      onChange={this.handleChange} />
     <textarea
      type="text"
      className='textarea-equipment'
      rows={20}
      cols={20}
      placeholder='Equipment'
      value={recipe.equipment}
      name='equipment'
      required
      onChange={this.handleChange} />
     <textarea
      type="text"
      className='textarea- instructions'
      rows={20}
      cols={78}
      placeholder='Instructions'
      value={recipe.instructions}
      name='instructions'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-cuisine"
      placeholder='Cuisine'
      value={recipe.cuisine}
      name='cuisine'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-cooktime"
      placeholder='Cooktime'
      value={recipe.cooktime}
      name='cooktime'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-difficulty"
      placeholder='Difficulty'
      value={recipe.difficulty}
      name='difficulty'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-diet"
      placeholder='Diet'
      value={recipe.diet}
      name='diet'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-cookingMethod"
      placeholder='CookingMethod'
      value={recipe.cookingMethod}
      name='cookingMethod'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-course"
      placeholder='Course'
      value={recipe.course}
      name='course'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-serving"
      placeholder='Serving'
      value={recipe.serving}
      name='serving'
      required
      onChange={this.handleChange} />
     <input
      className="edit-input-keyword"
      placeholder='Keyword'
      value={recipe.keyword}
      name='keyword'
      required
      onChange={this.handleChange} />
     <button type='submit' className="submit-button">Submit Please!</button>
    </form>
   </div>
  )
 }
}

export default RecipeEdit;
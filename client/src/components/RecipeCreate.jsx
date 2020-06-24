import React, { Component } from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import './recipeCreate.scss'
import { Redirect } from 'react-router'
import { createRecipe } from '../services/recipes'


class RecipeCreate extends Component {
  constructor() {
    super()
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
      },
      created: false
    }
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
    const created = await createRecipe(this.state.recipe)
    this.setState({ created })
  }

  render() {
    const { recipe, created } = this.state

    if (created) {
      return <Redirect to={`/recipes`} />
    }
    return (
      <>
        <Header />
        <div className="recipeCreate--wrapper">
          <form
            autoComplete="off"
            className="recipeCreate" onSubmit={this.handleSubmit}>
            <input
              className="recipeCreate-input"
              placeholder="recipe name"
              value={this.state.recipe.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange} />
            <input
              className="createimage-link"
              placeholder='Image Link'
              value={this.state.recipe.imgURL}
              name='imgURL'
              required
              onChange={this.handleChange} />
            <input
              className="create-videoLink"
              placeholder='Video Link'
              value={this.state.recipe.videoURL}
              name='videoURL'
              required
              onChange={this.handleChange} />
            <textarea

              className='create-ingredients'
              rows={20}
              cols={78}
              placeholder='ingredients'
              value={this.state.recipe.ingredients}
              name='ingredients'
              required
              onChange={this.handleChange} />
            <textarea

              className='create-equipment'
              rows={20}
              cols={20}
              placeholder='Equipment'
              value={this.state.recipe.equipment}
              name='equipment'
              required
              onChange={this.handleChange} />
            <textarea

              className='create-instructions'
              rows={20}
              cols={78}
              placeholder='Instructions'
              value={this.state.recipe.instructions}
              name='instructions'
              required
              onChange={this.handleChange} />
            <input
              className="create-cuisine"
              placeholder='Cuisine'
              value={this.state.recipe.cuisine}
              name='cuisine'
              required
              onChange={this.handleChange} />
            <input
              className="create-cooktime"
              placeholder='Cooktime'
              value={this.state.recipe.cooktime}
              name='cooktime'
              required
              onChange={this.handleChange} />
            <input
              className="create-difficulty"
              placeholder='Difficulty'
              value={this.state.recipe.difficulty}
              name='difficulty'
              required
              onChange={this.handleChange} />
            <input
              className="create-diet"
              placeholder='Diet'
              value={this.state.recipe.diet}
              name='diet'
              required
              onChange={this.handleChange} />
            <input
              className="create-cookingMethod"
              placeholder='CookingMethod'
              value={this.state.recipe.cookingMethod}
              name='cookingMethod'
              required
              onChange={this.handleChange} />
            <input
              className="create-course"
              placeholder='Course'
              value={this.state.recipe.course}
              name='course'
              required
              onChange={this.handleChange} />
            <input
              className="create-serving"
              placeholder='Serving'
              value={this.state.recipe.serving}
              name='serving'
              required
              onChange={this.handleChange} />
            <input
              className="create-keyword"
              placeholder='Keyword'
              value={this.state.recipe.keyword}
              name='keyword'
              required
              onChange={this.handleChange} />
            <button type='submit' className="submit-button">Let's Create the Recipe</button>
          </form>
        </div>
        <Footer />
      </>
    )
  }
}

export default RecipeCreate 
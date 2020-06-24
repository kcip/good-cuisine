import React, { Component } from 'react'
import Layout from './shared/Layout'
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
    console.log(created)
    this.setState({ created })
  }

  render() {
    const { recipe, created } = this.state

    // console.log(recipe)

    if (created) {
      return <Redirect to={`/`} />
    }
    return (
      <>
        <Header />
        <div className="recipeCreate--wrapper">
          <form
            autocomplete="off"
            className="recipeCreate" onSubmit={this.handleSubmit}>
            <input
              className="recipeCreate-input"
              placeholder="recipe name"
              value={recipe.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange} />
            <input
              className="createimage-link"
              placeholder='Image Link'
              value={recipe.imgURL}
              name='imgURL'
              required
              onChange={this.handleChange} />
            <input
              className="create-videoLink"
              placeholder='Video Link'
              value={recipe.videoURL}
              name='videoURL'
              required
              onChange={this.handleChange} />
            <textarea

              className='create-ingredients'
              rows={20}
              cols={78}
              placeholder='ingredients'
              value={recipe.ingredients}
              name='ingredients'
              required
              onChange={this.handleChange} />
            <textarea

              className='create-equipment'
              rows={20}
              cols={20}
              placeholder='Equipment'
              value={recipe.equipment}
              name='equipment'
              required
              onChange={this.handleChange} />
            <textarea

              className='create-instructions'
              rows={20}
              cols={78}
              placeholder='Instructions'
              value={recipe.instructions}
              name='instructions'
              required
              onChange={this.handleChange} />
            <input
              className="create-cuisine"
              placeholder='Cuisine'
              value={recipe.cuisine}
              name='cuisine'
              required
              onChange={this.handleChange} />
            <input
              className="create-cooktime"
              placeholder='Cooktime'
              value={recipe.cooktime}
              name='cooktime'
              required
              onChange={this.handleChange} />
            <input
              className="create-difficulty"
              placeholder='Difficulty'
              value={recipe.difficulty}
              name='difficulty'
              required
              onChange={this.handleChange} />
            <input
              className="create-diet"
              placeholder='Diet'
              value={recipe.diet}
              name='diet'
              required
              onChange={this.handleChange} />
            <input
              className="create-cookingMethod"
              placeholder='CookingMethod'
              value={recipe.cookingMethod}
              name='cookingMethod'
              required
              onChange={this.handleChange} />
            <input
              className="create-course"
              placeholder='Course'
              value={recipe.course}
              name='course'
              required
              onChange={this.handleChange} />
            <input
              className="create-serving"
              placeholder='Serving'
              value={recipe.serving}
              name='serving'
              required
              onChange={this.handleChange} />
            <input
              className="create-keyword"
              placeholder='Keyword'
              value={recipe.keyword}
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
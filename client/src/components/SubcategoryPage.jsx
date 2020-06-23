import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import { getRecipes } from '../services/recipes'
import Header from './shared/Header'
import Footer from './shared/Footer'
import "./SubcategoryPage.css"
import Search from './Search'

class SubcategoryPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryName: "",
      subcategoryName: "",
      matchedRecipes: []
    }
  }


  async componentDidMount() {

    const categoryName = this.props.match.params.category
    const subcategoryName = this.props.match.params.subcategory

    this.setState({
      categoryName,
      subcategoryName
    })

    const allRecipes = await getRecipes()

    // get all matched recipes
    let matchedRecipes = []

    if (categoryName === "cuisine" || categoryName === "difficulty" || categoryName === "course") {
      matchedRecipes = await allRecipes.filter(recipe => recipe[categoryName] === subcategoryName)
    }
    else if (categoryName === "cooktime") {
      switch (subcategoryName) {
        case "30 minutes or less":
          matchedRecipes = await allRecipes.filter(recipe => parseInt(recipe[categoryName]) <= 30)
          break
        case "60 minutes or less":
          matchedRecipes = await allRecipes.filter(recipe => parseInt(recipe[categoryName]) <= 60 && parseInt(recipe[categoryName]) > 30)
          break
        case "90 minutes or less":
          matchedRecipes = await allRecipes.filter(recipe => parseInt(recipe[categoryName]) <= 90 && parseInt(recipe[categoryName]) > 60)
          break
      }
    }
    else if (categoryName === "serving") {
      switch (subcategoryName) {
        case "Serve 1 - 3":
          matchedRecipes = await allRecipes.filter(recipe => parseInt(recipe[categoryName]) <= 3)
          break
        case "Serve 4 - 5":
          matchedRecipes = await allRecipes.filter(recipe => parseInt(recipe[categoryName]) <= 5 && parseInt(recipe[categoryName]) > 3)
          break
        case "Serve 6 or more":
          matchedRecipes = await allRecipes.filter(recipe => parseInt(recipe[categoryName]) >= 6)
          break
      }
    }
    else if (categoryName === "healthy") {
      switch (subcategoryName) {
        case "Vegetarian":
          matchedRecipes = await allRecipes.filter(recipe => recipe.diet.includes("Vegetarian"))
          break
        case "Japanese":
          matchedRecipes = await allRecipes.filter(recipe => recipe.diet.includes("Japanese"))
          break
      }
    }

    //console.log(matchedRecipes)

    this.setState({
      matchedRecipes
    })

  }

  render() {

    return (
      <div>
        <Header />
        <div className='search'>
          <Search />
        </div>

        <div className="recipes">
          <div className="subcategory-name">
            {this.props.match.params.subcategory}
          </div>
          <div className="recipe-cards">
            {this.state.matchedRecipes.map((recipe, index) =>
              <Link to={"/" + recipe._id}>
                <RecipeCard subcategoryName={this.state.subcategoryName} name={recipe.name} imgURL={recipe.imgURL} cooktime={recipe.cooktime} />
              </Link>
            )}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(SubcategoryPage)
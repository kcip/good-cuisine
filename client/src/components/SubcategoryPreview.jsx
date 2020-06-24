import React, { Component } from 'react'
import RecipeCard from "./RecipeCard"
import { Link } from 'react-router-dom'
import './SubcategoryPreview.css'

export default class SubcategoryPreview extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categoryName: "",
      subcategoryName: "",
      matchedRecipes: [],
      names: [],
      imgURLs: [],
      cooktimes: []
    }
  }

  async componentDidMount() {

    let allRecipes = this.props.allRecipes
    let categoryName = this.props.categoryName
    let subcategoryName = this.props.subcategoryName

    this.setState({ categoryName, subcategoryName })

    console.log(categoryName)
    console.log(subcategoryName)

    let matchedRecipes = []

    // get all matched recipes
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
    else if (categoryName === "cookingmethod") {
      switch (subcategoryName) {
        case "Fry":
          matchedRecipes = await allRecipes.filter(recipe => recipe.cookingMethod.includes("fry"))
          break
        case "Bake":
          matchedRecipes = await allRecipes.filter(recipe => recipe.cookingMethod.includes("bake"))
          break
        case "Broil":
          matchedRecipes = await allRecipes.filter(recipe => recipe.cookingMethod.includes("broil"))
          break
        case "Saute":
          matchedRecipes = await allRecipes.filter(recipe => recipe.cookingMethod.includes("saute"))
          break
        case "Grill":
          matchedRecipes = await allRecipes.filter(recipe => recipe.cookingMethod.includes("grill"))
          break
        case "Simmer":
          matchedRecipes = await allRecipes.filter(recipe => recipe.cookingMethod.includes("simmer"))
          break
      }
    }

    // console.log(matchedRecipes)

    let names = []
    let imgURLs = []
    let cooktimes = []

    if (matchedRecipes.length > 0) {
      for (let i = 0; i < Math.min(3, matchedRecipes.length); i++) {
        names.push(matchedRecipes[i].name)
        imgURLs.push(matchedRecipes[i].imgURL)
        cooktimes.push(matchedRecipes[i].cooktime)
      }
    }

    this.setState({
      matchedRecipes,
      names,
      imgURLs,
      cooktimes
    })
  }


  render() {
    return (
      <div className="sub-preview">
        <div className="sub-name">
          {this.state.subcategoryName}
        </div>
        <div className="preview-cards">
          {this.state.names.map((name, index) =>
            <Link to={"/" + this.state.matchedRecipes[index]._id}>
              <RecipeCard subcategoryName={this.state.subcategoryName} name={name} imgURL={this.state.imgURLs[index]} cooktime={this.state.cooktimes[index]} />
            </Link>)
          }
        </div>
        <div className="more">
          <Link to={"/category/" + this.state.categoryName + "/" + this.state.subcategoryName}>
            More...
          </Link>
        </div>
      </div>
    )
  }
}

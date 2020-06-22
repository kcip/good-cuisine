import React, { Component } from 'react'
import RecipeCard from "./RecipeCard"
import { Link } from 'react-router-dom'

export default class SubcategoryPreview extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categoryName: "",
      subcategoryName: "",
      threeRecipes: []
    }
  }

  componentDidMount() {

    let allRecipes = this.props.allRecipes
    let categoryName = this.props.categoryName
    let subcategoryName = this.props.subcategoryName

    this.setState({ categoryName, subcategoryName })

    console.log(categoryName)
    console.log(subcategoryName)
    // get all matched recipes
    let matchedRecipes = allRecipes.filter(recipe => recipe[categoryName] === subcategoryName)

    console.log(matchedRecipes)

    // to find the first 3 instances that match the subcategories and display the cards

  }



  render() {
    return (
      <div>
        {this.state.subcategoryName}
        <RecipeCard subcategoryName={this.state.subcategoryName} />


        <div>
          <Link to={"/category/" + this.state.categoryName + "/" + this.state.subcategoryName}>
            More...
              </Link>
        </div>
      </div>
    )
  }
}

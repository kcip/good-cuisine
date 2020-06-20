import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import { getRecipes } from '../services/recipes'

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
    let matchedRecipes = []

    if (categoryName === "cuisine") {
      matchedRecipes = allRecipes.filter(recipe => {
        return recipe.cuisine === subcategoryName
      })
    }

    this.setState({
      matchedRecipes
    })

  }

  render() {

    return (
      <div>
        {this.props.match.params.category}
        <div>
          {this.props.match.params.subcategory}
        </div>
        <div>
          {this.state.matchedRecipes.map(recipe => <div>{recipe.name}</div>)}

        </div>


      </div>
    )
  }
}

export default withRouter(SubcategoryPage)
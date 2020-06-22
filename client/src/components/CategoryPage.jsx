import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { getRecipes } from '../services/recipes'
import RecipeCard from './RecipeCard'
import Layout from './shared/Layout'
import SubcategoryPreview from './SubcategoryPreview'

class CategoryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allRecipes: [],
      categoryName: '',
      subcategories: []
    }
  }

  async componentDidMount() {
    const allRecipes = await getRecipes()
    console.log(allRecipes)

    this.setState({ allRecipes })

    const categoryName = this.props.match.params.category + ""

    this.setState({ categoryName })

    // get all matched recipes
    let allMatchedRecipes = []

    // https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
    if (categoryName === "cuisine" || categoryName === "difficulty" || categoryName === "course") {
      let subcategories = allRecipes.map(item => item.cuisine)
        .filter((value, index, self) => self.indexOf(value) === index)

      this.setState({ subcategories })
    }

    else if (categoryName === "cooktime") {
      let subcategories = ["30 minutes or less", "60 minutes or less", "90 minutes or less"]

      this.setState({ subcategories })
    }

    else if (categoryName === "serving") {
      let subcategories = ["Serve 4 - 5 ", "Serve 6 or more"]

      this.setState({ subcategories })
    }


  }


  render() {

    return (
      <div>
        <div>
          {this.state.categoryName}
        </div>
        <div>
          {this.state.subcategories.map((subcategoryName, i) =>
            <div>
              <SubcategoryPreview allRecipes={this.state.allRecipes} categoryName={this.state.categoryName} subcategoryName={subcategoryName} />
            </div>)}
        </div>
      </div>


    )
  }

}

export default withRouter(CategoryPage)
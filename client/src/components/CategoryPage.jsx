import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { getRecipes } from '../services/recipes'
import RecipeCard from './RecipeCard'
import Layout from './shared/Layout'

class CategoryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryName: '',
      subcategories: [],
      matchedRecipes: []
    }
  }

  async componentDidMount() {
    const allRecipes = await getRecipes()
    console.log(allRecipes)

    const categoryName = this.props.match.params.category + ""

    this.setState({ categoryName })

    let matchedRecipes = []


    // https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
    if (categoryName === "cuisine") {
      let subcategories = allRecipes.map(item => item.cuisine)
        .filter((value, index, self) => self.indexOf(value) === index)

      console.log(subcategories)
      this.setState({ subcategories })

      // to find the first 3 instances that match the subcategories

    }

    else if (categoryName === "difficulty") {
      let subcategories = allRecipes.map(item => item.difficulty)
        .filter((value, index, self) => self.indexOf(value) === index)

      console.log(subcategories)
      this.setState({ subcategories })
    }

    else if (categoryName === "cooktime") {
      let subcategories = ["30 minutes or less", "60 minutes or less", "90 minutes or less"]

      console.log(subcategories)
      this.setState({ subcategories })
    }

    else if (categoryName === "serving") {
      let subcategories = ["Serve 4 - 5 ", "Serve 6 or more"]

      console.log(subcategories)
      this.setState({ subcategories })
    }

    else if (categoryName === "course") {
      let subcategories = allRecipes.map(item => item.course)
        .filter((value, index, self) => self.indexOf(value) === index)

      console.log(subcategories)
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
              {subcategoryName}
              <div>
                <RecipeCard category={this.state.categoryName} subcategoryName={subcategoryName} index="0" />
                <RecipeCard category={this.state.categoryName} subcategoryName={subcategoryName} index="1" />
                <RecipeCard category={this.state.categoryName} subcategoryName={subcategoryName} index="2" />
              </div>
              <Link to={"/category/" + this.state.categoryName + "/" + subcategoryName}>
                More...
              </Link>
            </div>)}
        </div>
      </div>


    )
  }

}

export default withRouter(CategoryPage)
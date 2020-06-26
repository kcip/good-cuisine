import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { getRecipes } from '../services/recipes'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Search from './Search'
import SubcategoryPreview from './SubcategoryPreview'
import "./CategoryPage.css"

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


    // https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
    if (categoryName === "cuisine" || categoryName === "difficulty" || categoryName === "course") {
      let subcategories = allRecipes.map(item => item[categoryName])
        .filter((value, index, self) => self.indexOf(value) === index)

      console.log(subcategories)
      this.setState({ subcategories })
    }

    else if (categoryName === "cooktime") {
      let subcategories = ["30 minutes or less", "60 minutes or less", "90 minutes or less"]
      this.setState({ subcategories })
    }

    else if (categoryName === "serving") {
      let subcategories = ["Serve 1 - 3", "Serve 4 - 5", "Serve 6 or more"]
      this.setState({ subcategories })
    }

    else if (categoryName === "healthy") {
      let subcategories = ["Vegetarian", "Japanese"]
      this.setState({ subcategories })
    }
    else if (categoryName === "healthy") {
      let subcategories = ["Vegetarian", "Japanese"]
      this.setState({ subcategories })
    }
    else if (categoryName === "cookingmethod") {
      let subcategories = ["Bake", "Broil", "Fry", "Grill", "Saute", "Simmer"]
      this.setState({ subcategories })
    }


  }


  render() {
    let categoryName = this.state.categoryName
    if (categoryName === "cookingmethod") {
      categoryName = "Cooking method"
    }

    return (
      <>
        <Header />
        <div>
          <div className="search">
            <Search />
          </div>

          <div className="category-name">
            {categoryName.toUpperCase()}
          </div>
          <div className="subcategories">
            {this.state.subcategories.map((subcategoryName, i) =>
              <div>
                <SubcategoryPreview allRecipes={this.state.allRecipes} categoryName={this.state.categoryName} subcategoryName={subcategoryName} />
              </div>)}
          </div>
        </div>
        <Footer />
      </>
    )
  }

}

export default withRouter(CategoryPage)
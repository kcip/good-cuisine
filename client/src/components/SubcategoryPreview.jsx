import React, { Component } from 'react'
import RecipeCard from "./RecipeCard"
import { Route, Link } from 'react-router-dom'
import SubcategoryPage from './SubcategoryPage'

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

    // get all matched recipes
    let matchedRecipes = await allRecipes.filter(recipe => recipe[categoryName] === subcategoryName)

    console.log(matchedRecipes)
    console.log(matchedRecipes.length)

    let names = []
    let imgURLs = []
    let cooktimes = []

    if (matchedRecipes.length > 1) {
      for (let i = 0; i < 3; i++) {
        names.push(matchedRecipes[i].name)

        imgURLs.push(matchedRecipes[i].imgURL)
        cooktimes.push(matchedRecipes[i].cooktime)
      }
    }

    console.log(names)
    console.log(imgURLs)

    this.setState({
      matchedRecipes,
      names,
      imgURLs,
      cooktimes
    })

  }



  render() {
    return (
      <div>
        <div>
          {this.state.subcategoryName}
        </div>
        <div>
          <RecipeCard subcategoryName={this.state.subcategoryName} name={this.state.names[0]} imgURL={this.state.imgURLs[0]} />

        </div>


        <div>
          <Route exact path="/category/:category/:subcategory">
            <SubcategoryPage matchedRecipes={this.state.matchedRecipes} />
          </Route>
          <Link to={"/category/" + this.state.categoryName + "/" + this.state.subcategoryName}>
            More...
          </Link>
        </div>
      </div>
    )
  }
}

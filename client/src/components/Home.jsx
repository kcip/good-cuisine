import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getRecipes } from '../services/recipes.js'
import Header from './shared/Header';
import Footer from './shared/Footer'
import Search from '../components/Search'
import TimeOfDay from './TimeOfDay'
import Layout from './shared/Layout'
import './home.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Concierge from './Concierge';
import ConciergeList from './ConciergeList.jsx';
export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      recipes: [{
        cookingMethod: '',
        cooktime: '',
        course: '',
        createdAt: '',
        cuisine: '',
        diet: '',
        difficulty: '',
        equipment: [],
        imgURL: '',
        ingredients: '',
        instructions: '',
        keyword: '',
        name: '',
        saved: null,
        serving: '',
        updatedAt: '',
        videoURL: '',
        _id: ''
      }]
    }
  }

  async componentDidMount() {
    const recipes = await getRecipes();
    // console.log(recipes);
    this.setState({ recipes })

  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyload: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      // autoplay: true
    }
    const state = this.state.recipes;
    //console.log(state)
    return (
      <>

        <div className="allrecipes">
          <Header />
          <Search />
          <Slider {...settings}>
            {state && state.slice(0, 4).map((recipe, i) => (
              <img className="slick-images" src={recipe.imgURL} alt={recipe.name} key={recipe._id} />
            ))}
          </Slider>
          {/* all recipes here */}
          {/* {console.log('48', this.state.recipes)} */}
        </div>
        <TimeOfDay />
        <Concierge data={this.state.recipes} />
        <Route path="/concierge/:category">
          <ConciergeList data={this.state.recipes} />
        </Route>
        <Footer />
      </>
    )
  }
}

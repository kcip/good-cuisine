import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getRecipes } from '../services/recipes.js'
import Header from './shared/Header';
import Footer from './shared/Footer'
import Search from '../components/Search'
import TimeOfDay from './TimeOfDay'
import './home.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Concierge from './Concierge';
import ConciergeList from './ConciergeList.jsx';
import img1 from '../resources/noodles.jpg'
import img2 from '../resources/steak.jpg'
import img3 from '../resources/strawberries.jpg'
import img5 from '../resources/pork.jpg'
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
  this.setState({ recipes })

 }
 render() {
  const settings = {
   arrows: false,
   dots: true,
   infinite: true,
   lazyload: true,
   speed: 1500,
   slidesToShow: 1,
   slidesToScroll: 1,
   //autoplay: true
  }
  
  return (
   <>
    <div className="allrecipes">
     <Header />
     <Search />
     <Slider {...settings}>
      <div className="sliderContainer">
       <img className="slider--image" src={img2} alt="steak" />
      </div>
      <div className="sliderContainer">
       <img className="slider--image" src={img1} alt="noodles image" />
      </div>
      <div className="sliderContainer">
       <img className="slider--image" src={img3} alt="strawberries" />
      </div>
      <div className="sliderContainer">
       <img className="slider--image" src={img5} alt="pork" />
      </div>
     </Slider>
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

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { getRecipes } from '../services/recipes'
import quickImg from '../resources/clock.jpg'
import easyImg from '../resources/easy.jpg'
import americanImg from '../resources/americanfood.jpg'
import dinnerImg from '../resources/dinner.jpeg'

const Concierge = (props) => {

 const [recipes, setRecipes] = useState([])
 const [quick, setQuick] = useState([])
 const [easy, setEasy] = useState([])
 const [cusine, setCuisine] = useState([])
 const [course, setCourse] = useState([])

 useEffect(() => {
  async function getData() {
   const response = await getRecipes()
   setRecipes(response)
  }

  getData()
 }, [])


 useEffect(() => {
  const setFilter = async () => {
   const quickRecipes = await recipes.filter(recipe => recipe.cooktime <= '30')
   const difficultyRecipes = await recipes.filter(recipe => recipe.difficulty.toLowerCase() === 'easy')
   const americanRecipes = await recipes.filter(recipe => recipe.cuisine.toLowerCase() === 'american')
   const courseRecipes = await recipes.filter(recipe => recipe.course.toLowerCase() === 'dinner')
   setQuick(quickRecipes)
   setEasy(difficultyRecipes)
   setCuisine(americanRecipes)
   setCourse(courseRecipes)
  }
  setFilter()
 }, [recipes])


 return (
  <>
   <div className="concierge">
    <Link to={"/category/cooktime/30 minutes or less"} className="page-links" >
     <div className="concierge--quick quick-link" style={{ backgroundImage: `url(${quickImg})` }}>
      {/* <Link to="/concierge/quick">Quick</Link> */}
      <h3>Quick</h3>
     </div>
    </Link>
    <Link to={"/category/difficulty/Easy"} className="page-links">
     <div className="concierge--easy quick-link" style={{ backgroundImage: `url(${easyImg})` }}>
      <h3>Easy</h3>
     </div>
    </Link>
    <Link to={"/category/cuisine/American"} className="page-links">
     <div className="concierge--cuisine quick-link" style={{ backgroundImage: `url(${americanImg})` }}>
      <h3>American</h3>
     </div>
    </Link>
    
   </div>

   <div className="filterRecipes--text">
    <h2>Filter recipes by</h2>
   </div>

   <div className="concierge--filters">
    <div className="quick-link">
     <Link to={"/category/cooktime"}>
      <h3>Time</h3>
     </Link>
    </div>
   
    <div className="quick-link">
     <Link to={"/category/healthy"}>
      <h3>Healthy</h3>
     </Link>
    </div>
    <div className="quick-link">
     <Link to={"/category/serving"}>
      <h3>Serving</h3>
     </Link>
    </div>
    <div className="quick-link">
     <Link to={"/category/difficulty"}>
      <h3>Difficulty</h3>
     </Link>
    </div>
    <div className="quick-link">
     <Link to={"/category/cuisine"}>
      <h3>Cuisine</h3>
     </Link>
    </div>
    <div className="quick-link">
     <Link to={"/category/course"}>
      <h3>Course</h3>
     </Link>
    </div>

   </div>


  </>
 )


}
export default withRouter(Concierge)

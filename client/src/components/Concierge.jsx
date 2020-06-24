import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { getRecipes } from '../services/recipes'
import quickImg from '../resources/clock.jpg'
import easyImg from '../resources/easy.jpg'
import americanImg from '../resources/americanfood.jpg'
import dinnerImg from '../resources/dinner.jpeg'
//import ConciergeList from './ConciergeList'
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
        <Link to={"/category/cooktime/30 minutes or less"} className="page-links">
          <div className="concierge--quick quick-link" style={{ backgroundImage: `url(${quickImg})` }}>
            {/* <Link to="/concierge/quick">Quick</Link> */}
            Quick
        </div>
        </Link>
        <Link to={"/category/difficulty/Easy"} className="page-links">
          <div className="concierge--easy quick-link" style={{ backgroundImage: `url(${easyImg})` }}>
            Easy
        </div>
        </Link>
        <Link to={"/category/cuisine/American"} className="page-links">
          <div className="concierge--cuisine quick-link" style={{ backgroundImage: `url(${americanImg})` }}>
            American
          </div>
        </Link>
        <Link to={"/category/course/Dinner"} className="page-links">
          <div className="concierge--cuisine quick-link" style={{ backgroundImage: `url(${dinnerImg})` }}>
            Dinner
         </div>
        </Link>
      </div>

      <div className="concierge--filters">
        <Link to={"/category/cooktime"}>
          <div className="quick-link">
            Time
        </div>
        </Link>
        <Link to={"/category/cookingmethod"}>
          <div className="quick-link">
            Cooking Method
        </div>
        </Link>
        <Link to={"/category/healthy"}>
          <div className="quick-link">
            Healthy
        </div>
        </Link>
        <Link to={"/category/serving"}>
          <div className="quick-link">
            Serving
        </div>
        </Link>
        <Link to={"/category/difficulty"}>
          <div className="quick-link">
            Difficulty
        </div>
        </Link>
        <Link to={"/category/cuisine"}>
          <div className="quick-link">
            Cuisine
        </div>
        </Link>
        <Link to={"/category/course"}>
          <div className="quick-link">
            Course
           </div>
        </Link>
      </div>
    </>
  )

}
export default withRouter(Concierge)
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { getRecipes } from '../services/recipes'
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

        <div className="concierge--quick quick-link">
          {/* <Link to="/concierge/quick">Quick</Link> */}
          <Link to={"/category/cooktime/30 minutes or less"}>
            Quick
           </Link>
        </div>
        <div className="concierge--easy quick-link">
          <Link to={"/category/difficulty/Easy"}>
            Easy
           </Link>
        </div>
        <div className="concierge--cuisine quick-link">
          <Link to={"/category/cuisine/American"}>
            American
           </Link>
        </div>
        <div className="concierge--cuisine quick-link">
          <Link to={"/category/course/Dinner"}>
            Dinner
           </Link>
        </div>
      </div>

      <div className="concierge--filters">
        <div className="quick-link">
          <Link to={"/category/cooktime"}>
            Time
           </Link>
        </div>
        <div className="quick-link">Cooking Method</div>
        <div className="quick-link">
          <Link to={"/category/healthy"}>
            Healthy
           </Link>
        </div>
        <div className="quick-link">
          <Link to={"/category/serving"}>
            Serving
           </Link>
        </div>
        <div className="quick-link">
          <Link to={"/category/difficulty"}>
            Difficulty
           </Link>
        </div>
        <div className="quick-link">
          <Link to={"/category/cuisine"}>
            Cuisine
           </Link>
        </div>
        <div className="quick-link">
          <Link to={"/category/course"}>
            Course
           </Link></div>
      </div>
    </>
  )

}
export default withRouter(Concierge)
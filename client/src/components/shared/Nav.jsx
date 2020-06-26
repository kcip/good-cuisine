import React from 'react'
import './shared.scss'
import { createRecipe } from '../../services/recipes'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/recipecreate">
        <p className="header--create">Create Recipe</p>
      </Link>
    </nav>
  )
}
export default Nav;
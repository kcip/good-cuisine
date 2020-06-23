import React, { useState, useEffect } from 'react'
import './search.scss'
import { getRecipes } from '../services/recipes.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useInputState from './hooks/useInputState'
import useToggle from './hooks/useToggle'
const Search = (props) => {

 const [search, updateSearch, resetSearch] = useInputState('')
 const [recipeSearch, setRecipeSearch] = useState('')
 const [searchModal, setSearchModal] = useToggle(false)
 const [isRendered, setRendered] = useToggle(false)
 useEffect(() => {
  async function getData() {
   const response = await getRecipes()
   let searchResults
   if (search) {
    searchResults = response.filter(i => i.name.toLowerCase().includes(search)) ||
     response.filter(i => i.cuisine.toLowerCase().includes(search))
   }
   setRecipeSearch(searchResults)
  }
  getData()
 }, [search])


 return (

  <div className="search-container">
   <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
    <span className="fontAwesomeIcon search">
     <FontAwesomeIcon icon={faSearch} color="#767676" />
    </span>
    <input
     className="search-input"
     value={search}
     onChange={updateSearch}
     name="Search"
     placeholder="Search..."
     type="text"
     autoFocus
     autoComplete="off"
     onKeyPress={setSearchModal}
    //onBlur={setSearchModal}
    />
    {console.log(recipeSearch)}
   </form>
   {searchModal ? <div className="searchModal">
    {recipeSearch && recipeSearch.map((elm, i) => (
     <div className="searchModal--container">
      <div className="searchModal--image">
       {/* <img src={elm.imgURL} /> */}
      </div>
      <div className="searchModal--details">
       <p className="searchModal--details">{elm.name}</p>
       <p className="searchModal--details">{elm.course}</p>
      </div>
     </div>

    ))}
   </div> : !searchModal}
  </div>
 )
}
export default Search;

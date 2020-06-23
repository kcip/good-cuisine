import React from 'react'
import './search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <span className="fontAwesomeIcon search">
        <FontAwesomeIcon icon={faSearch} color="#767676" />
      </span>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="Search..."
        type="text"
        autoFocus
      />

    </form>
  )
}
export default Search;
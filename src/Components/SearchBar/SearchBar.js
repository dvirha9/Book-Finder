import React, { useState } from 'react'
import './SearchBar.css'


function SearchBar({ setQuery }) {
    const [inputValue, setInputValue] = useState('')
    
    
    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = () => {
        setQuery(inputValue)
        window.scrollTo({top:window.innerHeight, behavior: 'smooth'})
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setQuery(inputValue)
            window.scrollTo({top:window.innerHeight, behavior: 'smooth'})
          }
    }

    
    return (
        <div className="search-bar">
            <input value={inputValue} onChange={onChange} onKeyDown={handleKeyDown} className="search-input" type="text" placeholder="Search.."></input>
            <button className="search-button" type="button" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
  }
  
  export default SearchBar;
  
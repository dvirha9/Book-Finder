import './Header.css'
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import booksImg from '../../img/books.jpeg'

function Header({ setQuery }) {
    return (
    <header className="header">
        <h1>Discover Your Next Favorite Book</h1>
        <SearchBar setQuery={setQuery}/>
        <img className="books-img" src={booksImg} alt="books"/>
    </header>
    );
  }
  
  export default Header;
  
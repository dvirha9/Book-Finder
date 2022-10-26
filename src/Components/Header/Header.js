import './Header.css'
import React, { useState, useRef, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import booksImg from '../../img/books.jpeg'

function Header({ setQuery }) {
    const [headerHeight, setHeaderHeight] = useState()
    const headerRef = useRef()

    useEffect(() => {
        setHeaderHeight(headerRef.current.clientHeight)
    }, [])

    return (
    <header ref={headerRef} className="header">
        <h1>Discover Your Next Favorite Book</h1>
        <SearchBar setQuery={setQuery} headerHeight={headerHeight} />
        <img className="books-img" src={booksImg} alt="books"/>
    </header>
    );
  }
  
  export default Header;
  
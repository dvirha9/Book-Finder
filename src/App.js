import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import BookSearchSection from './Components/BookSearchSection/BookSearchSection';
import BackToTopButton from './Components/BackToTopButton/BackToTopButton';
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="App">
      <Header setQuery={setQuery}/>
      <BookSearchSection query={query}/>
      <BackToTopButton />
    </div>
  );
}

export default App;

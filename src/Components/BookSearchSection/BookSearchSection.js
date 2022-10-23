import React, { useState, useEffect } from 'react'
// import SearchBar from '../SearchBar/SearchBar';
import BookList from '../BookList/BookList';
import useBooksFetch from '../../Hooks/useBooksFetch'
import './BookSearchSection.css'

function BookSearchSection({ query }) {
    const [lastBookIndex, setLastBookIndex] = useState(0)
    const { books, isLoading, hasMore } = useBooksFetch(query, lastBookIndex)
    const [bookList, setBookList] = useState(books)

    useEffect(() => {
      setBookList(books)
    }, [books])

    useEffect(() => {
      setLastBookIndex(0)
    }, [query])

  return (
    <div className="search-book-section hidden">
      {/* <SearchBar setQuery={setQuery}/> */}
      <BookList books={bookList} isLoading={isLoading} setLastBookIndex={setLastBookIndex} hasMore={hasMore} />
    </div>
  );
}

export default BookSearchSection;

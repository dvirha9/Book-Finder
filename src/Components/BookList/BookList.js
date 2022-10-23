import './BookList.css'
import React, { useCallback, useRef } from 'react'
import Book from '../Book/Book'
import CircularProgress from '@mui/material/CircularProgress';

function BookList({ books, isLoading, setLastBookIndex, hasMore }) {
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                if (hasMore) setLastBookIndex(prev => prev + 25)
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading, setLastBookIndex, hasMore])

    
    return (
    <div className={'book-list'}>
        {
            books && books.map((book, index) => {
                return (
                    <Book
                    key={index}
                    book={book}
                    {...(books.length === index + 1 ? {innerRef: lastBookElementRef} : {})}
                    />
                )
            })
        }
        {
            !isLoading && books.length === 0 ? <p>Nothing to show</p> : ""
        }
        {
            isLoading && <CircularProgress className="loader" size={100}/>
        }
        {
            !hasMore && !isLoading && books.length !== 0 ? <p>You've reached the end</p> : ""
        }
        
    </div>
    );
  }
  
  export default BookList;
  
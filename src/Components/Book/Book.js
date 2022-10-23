import './Book.css'
import React from 'react';

function Book({ book, innerRef }) {
    const longStringShortened = (str, n) => {
        return (str?.length > n) ? str.slice(0, n-1) + '...' : str;
    }

    return (
    <div className='book'>
        <img src={book?.volumeInfo?.imageLinks?.smallThumbnail || "https://via.placeholder.com/128x185.png?text=Not+Available"} alt={book.volumeInfo.title}></img>
        <div {...(innerRef !== undefined ? {ref: innerRef} : {})} className='book-info'>
            <h3>{longStringShortened(book?.volumeInfo?.title, 200)}</h3>
            {(book?.volumeInfo?.authors && <h4>By {book?.volumeInfo?.authors.join(', ')}</h4>) || <h4>By Unknown</h4>}
            {(book?.volumeInfo?.description && <p>{longStringShortened(book?.volumeInfo?.description, 1000)}</p>) || <p>No description</p>}
        </div>
    </div> 
    );
  }
  
  export default Book;
  
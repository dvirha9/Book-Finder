import './Book.css'
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


function Book({ book, innerRef }) {
    const [openModal, SetOpenModal] = useState(false)

    const longStringShortened = (str, n) => {
        return (str?.length > n) ? str.slice(0, n-1) + '...' : str;
    }

    const handleOpen = () => {
        SetOpenModal(true)
    }

    const handleClose = () => {
        SetOpenModal(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        maxHeight: "95vh",
        maxWidth: "95vw",
        overflow: "scroll",
        '@media (max-width:1300px)': {
            minWidth: "90vw",
            maxHeight: "90vh",
            maxWidth: "90vw"
        }

      };

    return (
    <>
        <div id="book" className='book' onClick={handleOpen} >
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail || "https://via.placeholder.com/128x185.png?text=Not+Available"} alt={book.volumeInfo.title}></img>
            <div {...(innerRef !== undefined ? {ref: innerRef} : {})} className='book-info'>
                <h3>{longStringShortened(book?.volumeInfo?.title, 200)}</h3>
                {(book?.volumeInfo?.authors && <h4>By {book?.volumeInfo?.authors.join(', ')}</h4>) || <h4>By Unknown</h4>}
                {(book?.volumeInfo?.description && <p>{longStringShortened(book?.volumeInfo?.description, 1000)}</p>) || <p>No description</p>}
            </div>
        </div>
        <Modal
        open={openModal}
        onClose={handleClose}
        >
            <Box sx={style} >
                <img src={book?.volumeInfo?.imageLinks?.smallThumbnail || "https://via.placeholder.com/128x185.png?text=Not+Available"} alt={book.volumeInfo.title}></img>
                <h3>{book?.volumeInfo?.title}</h3>
                {(book?.volumeInfo?.authors && <h4>By {book?.volumeInfo?.authors.join(', ')}</h4>) || <h4>By Unknown</h4>}
                {(book?.volumeInfo?.description && <p>{book?.volumeInfo?.description}</p>) || <p>No description</p>}
            </Box>
        </Modal>
    </>
    );
  }
  
  export default Book;
  
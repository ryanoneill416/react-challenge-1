import React from 'react'

function Book(props) {
    const book = props.book
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Total Pages: {book.pages}</p>
        </div>
    )
}

export default Book
import React from 'react'
import Book from './Book'

function RenderingLists() {
    const booklist = [
        'To Kill A Mockingbird',
        'The Great Gatsby',
        'The Catcher In The Rye'
    ]

    const books = [
        {
            title: 'To Kill A Mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'The Catcher In The Rye',
            author: 'J. D. Salinger',
            pages: 234
        }
    ]

    return (
        <div>
            {booklist.map(book => {
                return <h2>{book}</h2>
            })}
            <hr />
            {/* {books.map(book => {
                return (
                    <div>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Total Pages: {book.pages}</p>
                    </div>
                )
            })}
            <hr /> */}
            {books.map(book => {
                return <Book book={book}/>
            })}
        </div>
    )
}

export default RenderingLists
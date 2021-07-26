import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/714PYe6ugmL._AC_UY218_.jpg',
    title: 'High Performance Habits',
    author: 'Brendon Burchard',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg',
    title: 'The Lean Startup',
    author: 'Eric Ries',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('I am clicked')
  }

  const exampleHandler = (author) => {
    console.log(author)
  }
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}> {title} </h1>
      <h4> {author} </h4>
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>

      <button type='button' onClick={() => exampleHandler(author)}>
        Useful Button
      </button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))

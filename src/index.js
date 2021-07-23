import React from 'react';
import ReactDOM from 'react-dom'

import './index.css'

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/714PYe6ugmL._AC_UY218_.jpg',
  title: 'High Performance Habits',
  author: 'Brendon Burchard'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg',
  title: 'The Lean Startup',
  author: 'Eric Ries'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author} />
      <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author} />
    </section>
  )
}


const Book = ({img, title, author}) => {
  // console.log(props)
  return (
    <article className='book'>
    <img src = {img} alt = '' />
    <h1> {title} </h1>
    <h4> {author} </h4>
    </article>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'));


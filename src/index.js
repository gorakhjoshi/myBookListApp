import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const book = [
  {
    img: 'https://m.media-amazon.com/images/I/714PYe6ugmL._AC_UY218_.jpg',
    title: 'High Performance Habits',
    author: 'Brendon Burchard',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg',
    title: 'The Lean Startup',
    author: 'Eric Ries',
  },
]

// const name = ['Ram', 'Sita', 'Hari', 'Gita']
// const name = ['Ram', 'Sita', 'Hari', 'Gita']

// const newName = []
// for (const items of name) {
//   newName.push(items)
// }

const newName = name.map((items) => <h1>{items}</h1>)
// console.log(newName)

// const App = () => {
//   return newName
// }

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          After extensive original research and a decade as the world's
          highest-paid performance coach, Brendon Burchard finally reveals the
          most effective habits for reaching long-term success. Based on one of
          the largest surveys ever conducted on high performers, it turns out
          that just six habits move the needle the most in helping you succeed.
          Adopt these six habits and you win. Neglect them and life is a
          never-ending struggle.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          After extensive original research and a decade as the world's
          highest-paid performance coach, Brendon Burchard finally reveals the
          most effective habits for reaching long-term success. Based on one of
          the largest surveys ever conducted on high performers, it turns out
          that just six habits move the needle the most in helping you succeed.
          Adopt these six habits and you win. Neglect them and life is a
          never-ending struggle.
        </p>
      </Book>
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  // console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1> {title} </h1>
      <h4> {author} </h4>
      {children}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))

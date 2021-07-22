import React from 'react';
import ReactDOM from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />      
    </section>
  )
}

const Book = () => {
   return (
     <article>
       <Image />
       <Image />
       <Image />
     </article>
   )
}

const Image = () => <img src = "https://m.media-amazon.com/images/I/714PYe6ugmL._AC_UY218_.jpg" alt= '' />


ReactDOM.render(<BookList />, document.getElementById('root'));


// import React from 'react';

// function Book() {
//   return "This is the output of a book component. Replace this string with code to display an individual book's attributes.";
// }

// export default Book;


import React from "react";
import PropTypes from 'prop-types';
// import Search from "./Search";

const Book = ({ book }) => { //destructuring - { book } or can use 'props'
  const addBook = () => {
    console.log(`The book "${book.volumeInfo.title}" was clicked`);
  }

  const addButtonStyle={
    "width":"100px",
    "padding": "10px",
    "fontSize":"20px",
    "backgroundColor":"darkblue",
    "color": "white",
    "borderRadius":"5px",
    "float":"right"
}

const bookStyle={
  "float":"left",
  "margin": "20px 20px 40px 0"
}

  return (
    <div>
      <button onClick={addBook} style={addButtonStyle}>Add +</button>
      <h2 style={{"margin-top":"120px"}}>{book.volumeInfo.title}</h2>
      <p style={{"color":"darkgray", "fontStyle":"italic"}}>By {book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(" and ") : book.volumeInfo.authors}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={bookStyle}/>
      {book.saleInfo.retailPrice ? (
        <p>£{book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )}
      <p>{book.volumeInfo.description.substring(0, 200)}...</p>
    </div>
  );
};



Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({thumbnail: PropTypes.string.isRequired}),
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired
    }),
  }),
}

Book.defaultProps = {
  saleInfo: {
    retailPrice: {
      amount: 'No amount'
    }
  }
}

export default Book;





{/* <h1>{book.volumeInfo.title}</h1>
{book.volumeInfo.authors.length > 1 ? (
  <p>{book.volumeInfo.authors.join(" and ")}</p>
) : (
  <p>{book.volumeInfo.authors}</p>
)}

<img
  src={book.volumeInfo.imageLinks.smallThumbnail}
  alt={book.volumeInfo.title}
/>
{book ? (
  <p>£{book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</p>
) : (
  <p>No price found</p>
)} */}
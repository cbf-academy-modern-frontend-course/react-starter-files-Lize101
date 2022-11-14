// import React from 'react';

// function Book() {
//   return "This is the output of a book component. Replace this string with code to display an individual book's attributes.";
// }

// export default Book;


import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <h3>{book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(" and ") : book.volumeInfo.authors}</h3>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="Thumb"/>
      {book ? (
        <p>£{book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )} 
    </div>
  );
};

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
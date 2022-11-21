// import React from 'react';
// import Book from './components/Book';
// import data from './models/books.json';

// function App() {
//   const books = data;
//   return <Book/>;
// }

// export default App;

import React from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import { useState } from "react";
// import Search from "./components/Search";
// import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const [books] = useState(data);
  // const books = data;
  return (
    <>
    <h2>Liz's Bookcase App</h2>
    {/* <Search/> */}
    {books.map((book) => <Book key={book.id} book={book}/>)}
  </>
  )
}

export default App;

{/* <Router>
<Route exact path="/" element={
  <>
    <h2>Welcome to the Bookcase App</h2>
    <Search/>
    {books.map(book => <Book key={book.id} book={book}/>)}
  </>
}/>
</Router> */}
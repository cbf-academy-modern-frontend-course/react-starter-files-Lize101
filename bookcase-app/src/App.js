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
import Header from "./components/Header";
import Search from "./components/Search";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookList from "./components/BookList";

function App() {
  const [books] = useState(data);
  // const books = data;

  <Router>
    <Routes>
      <Route exact path="/" element={<Header />}/>
      <Route exact path="/bookcase" element={<Header />} />
    </Routes>
  </Router>

  const appStyle = {
    "fontFamily":"Arial",
    "width":"700px",
    "margin":"auto",
    "fontSize": "1.5em"
    // "display": "flex",
    // "alignItems": "center",
    // "justifyContent": "center",
    // "height": "100vw"
  }

  return (
    <div style={appStyle}>
      <Header />
      <Search/>
      {books.map((book) => <Book key={book.id} book={book} style={{"margin":"50px"}}/>)}
      {/* <BookList /> */}
  </div>
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
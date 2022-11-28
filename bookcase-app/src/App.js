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
import About from "./pages/About";
import Error from "./pages/ErrorPage";

function App() {
  const [books] = useState(data);
  // const books = data;

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
    <Router>
    <Routes>
      <Route exact path="/" element={
        <div style={appStyle}>
          <Header />
          <Search/>
          {books.map((book) => <Book key={book.id} book={book} style={{"margin":"50px"}}/>)}
        </div>
    }/>
      <Route exact path="/bookcase" element={
        <div style={appStyle}>
          <Header />
          <Search/>
          {books.map((book) => <Book key={book.id} book={book} style={{"margin":"50px"}}/>)}
        </div>
      
    } />
      <Route exact path="/about" element={
      <>
        <Header />
        <About />
        {/* <BookList /> */}
      </>
      } />
      <Route exact path="*" element={<Error />} />
    </Routes>
  </Router>
  )

// const findBooks = async (value) => {
//   const url =
//   `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&pr
//   int-type=books&projection=lite`;
// }

  // return (
  //   <div style={appStyle}>
  //     <Header />
  //     <Search/>
  //     {books.map((book) => <Book key={book.id} book={book} style={{"margin":"50px"}}/>)}
  //     {/* <BookList /> */}
  // </div>
  // )
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
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

function App() {
  const [books] = useState(data);
  // const books = data;
  return books.map(book => <Book key={book.id} book={book}/>);
}

export default App;
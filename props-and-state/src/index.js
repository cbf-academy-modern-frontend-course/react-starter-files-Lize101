import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
import ClickCounter from './components/ClickCounter'
const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  // const headphones =  [{"id":1, "title":"Headphones 1", "price":358.99},{"id":2, "title":"Headphones 2", "price":378.99},{"id":3, "title":"Headphones 3", "price":858.99},{"id":4, "title":"Headphones 4", "price":358.00}, {"id":5, "title":"Headphones 5", "price":228.99}];
  const [headphonesList] = useState(data);

  return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
    <ClickCounter/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

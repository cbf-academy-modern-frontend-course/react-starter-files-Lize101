import React from 'react';

const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (<div className="div">{item.title}<br></br> <p className='pricePara'>{item.price}</p></div>))}
    </main>
  );
}

export default GadgetList;

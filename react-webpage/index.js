'use strict';

function ClickableButton() {

  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return React.createElement('h1', {className : "h1Style"}, 'Hello World');
  }

  return React.createElement(
    'button', {
        className : "main-button",
    // style: {
    //   backgroundColor: "#3392e4",
    //   color: "#fff",
    //   border: "0",
    //   padding: "10px 20px",
    //   fontWeight: "bold",
    //   borderRadius: "5px",
    //   fontSize: "1.1em"
    // },
    onClick: () => setClick(true)
  },
    'Press Here'
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(ClickableButton));









// function ClickableButton() {

//   const [clicked, setClick] = React.useState(false);

//   if (clicked) {
//     return 'Hello World!';
//   }

//   return React.createElement(
//     'button', {
//         image.png  style: {
//       backgroundColor: "#3392e4",
//       color: "#fff",
//       border: "0",
//       padding: "10px 20px",
//       fontWeight: "bold",
//       borderRadius: "5px",
//       fontSize: "1.1em"
//     },
//     onClick: () => setClick(true)
//   },
//     'Press Here'
//   );
// }

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(React.createElement(ClickableButton));

// import React from 'react';
// import ReactDOM from 'react-dom'; 

// const name = 'Sarah';
// const element = <h1>{name}'s React Page</h1>;

// ReactDOM.render(element, document.getElementById('root'));

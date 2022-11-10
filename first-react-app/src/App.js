import logo from './logo.svg';
import './App.css';

// Style variable - used to add colour red to the h1 tag
// const divStyle = {
//   color: "red"
// }

const h1Style = {
  "fontSize": "60px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};

function App() {
  return (
<div className="App">
  <h1 style = {h1Style}>My React Page</h1>
  <h2 className="bio">This is my first React page… I enjoy learning!</h2>
</div>
  );
}

export default App;

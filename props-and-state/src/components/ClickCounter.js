import React, { useState} from 'react';
const ClickCounter = () => {
 const buttonStyle = {color:'red', padding: '20px 40px', margin: '20px 20px 20px 0'};
 const [count, setCount] = useState(0);

 return (
 <div>
 <h2>Count: {count}</h2>
 <div>Click the button below to increment the counter</div>
 <button style={buttonStyle} onClick={() => setCount(count
+ 1)}>Click!</button>
<button style={buttonStyle} onClick={() => setCount(count > 0 ? count - 1 : count)}>Unclicked</button>
 </div>
 );
 }

 export default ClickCounter;
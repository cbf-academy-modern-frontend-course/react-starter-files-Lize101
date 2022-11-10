function Profile(props) {
  const personInfo = {
    name: "Liz",
  };
  const element = (
    <main id="content" role="main" className="base">
      <h1>{props.name}'s React Page</h1>
      <p>{props.bio}bio</p>
    </main>
  );
  if (props.name.toLowerCase() === personInfo.name.toLowerCase()) {
    return element;
  }
  return (
    <main id="content" role="main" className="base">
      <h1>Just a React Page</h1>
      <p>Nothing to see here!</p>
    </main>
  );
}



/* Add the Profile function here */
// function Profile(props) {
//    if (props.name === "Liz") {
//         return <main id="content" role="main" className="base">
//             <h1>{props.name}’s React page</h1>
//             <p>{props.bio}</p>
//           </main>
//        }
//     else {
//       return <main id="content" role="main" className="base">
//         <h1>Just a React Page</h1>
//           <p>Nothing to see here!</p>
//         </main>    
//       }
//     }

export default Profile
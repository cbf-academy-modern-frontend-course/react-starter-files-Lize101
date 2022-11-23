const Search = (props) => {

    const formTextStyle={
        "width":"550px",
        "padding": "15px 0",
        "margin":"20px 10px 10px 10px",
        "borderRadius":"5px",
        "fontSize":"20px"
    }

    const formButtonStyle={
        "width":"100px",
        "padding": "10px",
        "margin":"20px 10px 10px 10px",
        "fontSize":"20px",
        "backgroundColor":"darkblue",
        "color": "white",
        "borderRadius":"5px"
    }

    return (
        <div>
            <form>
                <input type="text" placeholder=" Enter name, author, keyword or genre..." style={formTextStyle}/>
                <button type="submit" style={formButtonStyle}>Find</button>
            </form>
        </div>
    )
}

export default Search



// const Search = (props) => {

//     return (
//         <div>
//             <form>
//                 <input type="text" value={keyword} onChange={(e) =>setKeyword(e.target.value)} />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Search
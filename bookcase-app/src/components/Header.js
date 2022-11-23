import { Link } from 'react-router-dom';

const Header = () => {

    const headerStyle = {
        "padding":"5px",
        "width":"600px",
        "textAlign":"center"
    }

    const linkStyle = {
        "padding":"5px",
        "textDecoration":"none",
        "color":"blue",
        "fontSize":"25px"
    }
    return (
        <div style={headerStyle}>
            <h1>Liz's Bookcase App</h1>
            <div>
                <Link to="/" style={linkStyle}>Home |</Link>
                <Link to="/bookcase" style={linkStyle}>Bookcase</Link>
            </div>
        </div>
    )
}

export default Header;
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <h1>My Bookcase</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/bookcase">Bookcase</Link>
            </div>
        </div>
    )
}

export default Header;
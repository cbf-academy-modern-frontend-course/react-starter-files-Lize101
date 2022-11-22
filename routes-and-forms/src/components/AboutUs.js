import { Link } from "react-router-dom";
const AboutUs = () => {
    return (
        <div>
            <div>
                <h1>About Us Page</h1>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <p>Welcome to the about page - all about animals!</p>
            </div>
        </div>
    )
}

export default AboutUs;
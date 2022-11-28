import React from 'react';
import '../About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* <div>
                <Link to="/">Home</Link>
            </div>         */}
            <h2 className='red'>About</h2>
            <p>A website about books. Click the add button to add a book to your list.</p>
        </>

    )
}

export default About;
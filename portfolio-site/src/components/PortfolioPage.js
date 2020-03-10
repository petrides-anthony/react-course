import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {
    console.log(props);
    return (
        
        <div>
        <h1>My Work</h1>
            <p>
                This is my Portfolio page
            </p>
            <Link to="/portfolio/1">Item I</Link>
            <br/>
            <Link to="/portfolio/2">Item II</Link>
        </div>
    )};

export default PortfolioPage;
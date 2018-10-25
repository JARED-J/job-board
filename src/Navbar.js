import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className=''>
            <div className='container'>
                <div id="branding">
                    <h1 className='white-txt'>Job-Board</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href='http://localhost:3000/'>Github</a></li>
                        <li><a href='http://localhost:3000/'>Linkedin</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
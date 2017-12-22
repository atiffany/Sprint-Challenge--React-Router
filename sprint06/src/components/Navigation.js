import React from 'react';
import { NavLink } from 'react-router-dom';
// import SubNav from './SubNav';

const Navigation = () => {
    return (
        <div>
            <NavLink to = '/home'>Home</NavLink>
            <NavLink to = '/about'>About</NavLink>
            <NavLink to = '/find'>Find</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
            <NavLink to = '/join'>Join</NavLink>
        </div>
    );
    }

const SubNav = () => {
    return (
        <div>
            <Link to = '/'>1</Link>
        </div>
    );
}


export default Navigation;
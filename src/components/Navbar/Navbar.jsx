import React from 'react';
import '../Navbar/Navbar.css'
import BlueButton from '../Buttons/Buttons'

const Navbar = () => {
    return(
        <nav className="sm:w-screen md:w-screen lg:w-screen px-2 py-2 shadow-2xl">
            <div className="flex grid-row-1 gap-4 flex-row-reverse">
                <div><BlueButton buttonName="Github" link="https://github.com/Senor-Ducky"/></div>
                <div><BlueButton buttonName="Contact Me"/></div>
            </div>
        </nav>
    );
}

export default Navbar
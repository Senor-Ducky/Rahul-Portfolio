import React from 'react';
import '../Navbar/Navbar.css'
import BlueButton from '../Buttons/Buttons'
import Gradient from 'rgt'

const Navbar = () => {
    return(
        <div className=" w-screen shadow-lg">
            <div className="font-bold text-black flex inline-block p-2 gap-4">
                <h1 className="p-2">
                    <Gradient dir="left-to-right" from="#5f72be" to="#9921e8">
                        Rahul-Mishra
                    </Gradient>
                    </h1>
                <BlueButton buttonName="Github" link="https://github.com/Senor-Ducky"/>
                <BlueButton buttonName="Contact Me" link="https://www.linkedin.com/in/rahul-mishra-9953571bb/"/>
            </div>
        </div>

        
    );
}

export default Navbar
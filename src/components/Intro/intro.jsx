import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

function Intro() {
    return(
        <div className="container-fluid shadow-lg sm:w-screen md:w-screen lg:w-screen bg-purple-600 lg:h-72 sm:h-32 md:52  px-10 py-20">
            <div className="text-center font-bold text-white sm:text-4xl  lg:text-6xl">
                <ReactTypingEffect
                    text={["Hello!", "I'm Rahul Mishra", "Developer", "Designer", "Programmer", "Problem Solver"]}
                />
            </div>
        </div> 
    );
}

export default Intro
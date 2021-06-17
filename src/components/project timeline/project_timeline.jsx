import Tag from '../Tag/tag'
import ProjectCards from './project_cards'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function ProjectTimeline() {
    return(
        <div className="container-fluid sm:w-screen md:w-screen lg:w-screen  py-20">

            <Tag name="Projects"/>
            <VerticalTimeline>
                <ProjectCards 
                    cardTitle="True Iron Fist" 
                    cardSubTitle="
                    A Move List application for Tekken 7(PC/XBOX/PS4) made by me. Has all character move lists"
                    date="July 2020"
                    cardButtonLink="https://github.com/Senor-Ducky/True-Iron-Fist-flutter"
                />

                <ProjectCards
                    cardTitle="Servitor"
                    cardSubTitle=" A simple discord bot made using discord.js"
                    date="October 2020"
                    cardButtonLink="https://github.com/Senor-Ducky/Servitor-public"
                />

                <ProjectCards
                    cardTitle="ZoomBot"
                    cardSubTitle="A selenium Powered Bot for attending online classes with ease"
                    date="October 2020"
                    cardButtonLink="https://github.com/Senor-Ducky/ZoomBot"
                />

                <ProjectCards
                    cardTitle="Rovel-Docs"
                    cardSubTitle="Official Docs for Rovel.js"
                    date="November 2020"
                    cardButtonLink="https://github.com/Senor-Ducky/rovel-docs"
                />

                <ProjectCards 
                    cardTitle="6502-MOS-Emulator"
                    cardSubTitle="A Simple C++ program emulating a 6502 MOS"
                    date="December 2020"
                    cardButtonLink="https://github.com/Senor-Ducky/6502-MOS-Emulator"
                />

                <ProjectCards
                    cardTitle="Chintubot [contributed]"
                    cardSubTitle="A Multi Purpose Discord bot named after the ultimate programmer chintu"
                    date="December 2020"
                    cardButtonLink="https://github.com/Senor-Ducky/Chintubot-public"
                />

                <ProjectCards
                    cardTitle="Chintu-Bot-Web [contributed]"
                    cardSubTitle="Webpage for a multipurpose discord bot"
                    date="December 2020"
                    cardButtonLink="https://github.com/Noob-Coders-Gang/Chintu-Bot-Web"
                />

                <ProjectCards
                    cardTitle="FloppaBot"
                    cardSubTitle="Economy simulator discord bot written in discord.py rewrite"
                    date="February 2021"
                    cardButtonLink="https://github.com/Senor-Ducky/Floppabot"
                />

                <ProjectCards
                    cardTitle="SimpChain"
                    cardSubTitle="An Experimental blockchain made with GOlang for learning purposes"
                    date="April 2021"
                    cardButtonLink="https://github.com/Senor-Ducky/simpchain"
                />

                <ProjectCards
                    cardTitle="EZ-Cpp"
                    cardSubTitle="An easy to understand C++ learning repository. literally C++ made simple"
                    date="April 2021"
                    cardButtonLink="https://github.com/Senor-Ducky/EZ-Cpp"
                />

                <ProjectCards
                    cardTitle="Meme-App [contributed]"
                    cardSubTitle="Simple Meme app made using ReactJS"
                    date="May 2021"
                    cardButtonLink="https://github.com/swasthikshetty10/Meme-App-ReactJs"
                />

                <ProjectCards
                    cardTitle="CoV-Tracker"
                    cardSubTitle="A Covid-19 Tracker Site made using React and Tailwind CSS"
                    date="May 2021"
                    cardButtonLink="https://github.com/Senor-Ducky/CoV-Tracker"
                />

                <ProjectCards
                    cardTitle="CertiGen"
                    cardSubTitle="A simple certificate generator written in python using pandas and PRAW."
                    date="May 2021"
                    cardButtonLink="https://github.com/Senor-Ducky/Certi-Gen"
                />

                <ProjectCards
                    cardTitle="This Website"
                    cardSubTitle="The website you are viewing right now made with ReactJs, TailwindCSS and a lot of Love ❤️"
                    date="June 2021 - Forever"
                    cardButtonLink="https://github.com/Senor-Ducky/Rahul-Portfolio"
                />
            </VerticalTimeline>

    


        </div>

    );
}

export default ProjectTimeline
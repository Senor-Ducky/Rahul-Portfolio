import Tag from '../Tag/tag'
import ProjectCards from './project_cards'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function ProjectTimeline() {
    const skillArray = [
        {
            title: "True Iron Fist",
            description: "A Move List application for Tekken 7(PC/XBOX/PS4) made by me. Has all character move lists",
            date: "July 2020",
            link: "https://github.com/Senor-Ducky/True-Iron-Fist-flutter"
        },

        {
            title: "Servitor",
            description: "A simple discord bot made using discord.js",
            date: "October 2020",
            link: "https://github.com/Senor-Ducky/Servitor-public"
        },

        {
            title: "ZoomBot",
            description: "A selenium Powered Bot for attending online classes with ease",
            date: "October 2020",
            link: "https://github.com/Senor-Ducky/ZoomBot"
        },

        {
            title: "Rainbow Highlighter VS Code",
            description: "Rainbow themed syntax highlighter for VSCode",
            date: "December 2020",
            link: "https://github.com/Senor-Ducky/rainbow-highlighter"
        },

        {
            title: "Rovel Docs",
            description: "Official Docs for Rovel.js",
            date: "December 2020",
            link: "https://github.com/Senor-Ducky/rovel-docs"
        },

        {
            title: "ZoomRPC",
            description: "Discord RPC for showing off your zoom classes",
            date: "December 2020",
            link: "https://github.com/Senor-Ducky/ZoomRPC"
        },

        {
            title: "BasicOS",
            description: "A Simple OS made in Assembly that boots and loads the first sector of your disk",
            date: "December 2020",
            link: "https://github.com/Senor-Ducky/BasicOS"
        },

        {
            title: "6502 MOS-Emulator",
            description: "A simple C++ program emulating a 6502 MOS",
            date: "February 2021",
            link: "https://github.com/Senor-Ducky/6502-MOS-Emulator"
        },

        {
            title: "9anime Desktop Client",
            description: "A desktop client for 9anime",
            date: "March 2021",
            link: "https://github.com/Senor-Ducky/9anime-desktop-client"
        },

        {
            title: "Chintubot",
            description: "A Multipurpose Discord bot",
            date: "November 2020",
            link: "https://github.com/Senor-Ducky/Chintubot-public"
        },

        {
            title: "FloppaBot",
            description: "A Multipurpose Discord Bot",
            date: "March 2021",
            link: "https://github.com/Senor-Ducky/Floppabot"
        },

        {
            title: "Simpchain",
            description: "An experimental blockchain made with GO lang for learning purposes",
            date: "April 2021",
            link: "https://github.com/Senor-Ducky/simpchain"
        },

        {
            title: "EZ-Cpp",
            description: "An easy to understand C++ learning repository, C++ made simple",
            date: "April 2021",
            link: "https://github.com/Senor-Ducky/EZ-Cpp"
        },

        {
            title: "Meme App",
            description: "A meme app made using ReactJS",
            date: "May 2021",
            link: "https://github.com/Senor-Ducky/Meme-App-ReactJs"
        },

        {
            title: "CoV-Tracker",
            description: "A Covid-19 Tracker made using ReactJS and Tailwind CSS",
            date: "May 2021",
            link: "https://github.com/Senor-Ducky/CoV-Tracker"
        },

        {
            title: "Certi-Gen",
            description: "A simple certificate generator made using python",
            date: "May 2021",
            link: "https://github.com/Senor-Ducky/Certi-Gen"
        },

        {
            title: "My Portfolio",
            description: "This Website, made with ❤️, ReactJS and TailwindCSS ",
            date: "June 2021",
            link: "https://github.com/Senor-Ducky/Rahul-Portfolio"
        },

        {
            title: "RHEL8 Docker Setup",
            description: "Tutorial to set up Red Hat Enterprise Linux 8(UBI - Universal Base Image) docker container",
            date: "June 2021",
            link: "https://github.com/Senor-Ducky/RHEL8-Docker-setup"
        },

        {
            title: "Polymorphic Bot",
            description: "Polymorphic is a multipurpose discord bot that is aimed at programmers and tech enthusiasts, it does everything from scraping programming articles to scouring wikipedia.",
            date: "July 2021",
            link: "https://github.com/Senor-Ducky/Polymorphic-bot"
        }
    ]
    return(
        <div className="container-fluid sm:w-screen md:w-screen lg:w-screen  py-20">

            <Tag name="Projects"/>
            <VerticalTimeline>
                {skillArray.map((skill)=>{
                    return <ProjectCards cardTitle={skill.title} cardSubTitle={skill.description} date={skill.date} cardButtonLink={skill.link}/>
                })}
            </VerticalTimeline>

    


        </div>

    );
}

export default ProjectTimeline
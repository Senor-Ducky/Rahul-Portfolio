import Tag from '../Tag/tag'

function About() {
    return(
        <div className="container-fluid sm:w-screen md:w-screen lg:w-screen px-10 py-20 content-center">
            
            <Tag name="About Me"/>
            <h2 className="text-center font-bold py-10">
                Hey Hey People!!!<br/>
                I'm Rahul, an average CSE student<br/>
                I dabble in lots of languages and different types of technologies,<br/>
                using what is useful pertaining to my requirements<br/>
                Feel free to take a look at my skills, stats and projects below
            </h2>
            
        </div>
    );
}

export default About
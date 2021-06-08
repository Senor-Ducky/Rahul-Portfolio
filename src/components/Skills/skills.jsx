import SkillBar from 'react-skillbars';

function Skills() {

    const skills = [
        {type:"C",level: 100},
        {type:"C++",level: 85},
        {type:"Java", level: 25},
        {type:"Python", level: 75},
        {type:"Flask", level: 50},
        {type:"Flutter", level:70},
        {type:"Assembly", level:45},
        {type:"DSA ", level: 80}
    ]
    
    const colors = {
        title: {
            background: '#7C3AED'
        },

        bar: '#A78BFA'

    }

    return(
        <div className="container-fluid sm:w-screen md:w-screen lg:w-screen px-10 py-20 content-center">
            
            <h1 className="font-bold shadow-lg text-center w-20 mx-auto text-white bg-purple-600">Skills</h1>
            
            <div className="container-fluid py-10">
                <SkillBar skills={skills}
                    colors= {colors}
                
                />
            </div>

            
            
        </div>

        
    );
}

export default Skills
import reactlogo from '../svg/physics.svg'
import Skill_Card from '../skill_card/skill_card';
import java from '../svg/java.svg'
import cpp from '../svg/cpp.svg'
import clang from '../svg/c-lang.svg'
import js from '../svg/js.svg'
import html from '../svg/html.svg'
import css from '../svg/css-3.svg'
import python from '../svg/Python-logo-notext.svg'
import flask from '../svg/flask.svg'
import linux from '../svg/linux.svg'
import ps from '../svg/ps.svg'
import pr from '../svg/pr.svg'
import ai from '../svg/ai.svg'
import dart from '../svg/dart.svg'
import flutter from '../svg/flutter.svg'
import git from '../svg/git.svg'
import github from '../svg/github.svg'
import Tag from '../Tag/tag'

function Skills() {


    return(
        <div className="container-fluid sm:w-screen md:w-screen lg:w-screen px-10 py-20 content-center">
            
            <Tag name="Skills"/>
            
            <div className="flex justify-center py-10">

                <div className="grid lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <Skill_Card image_link={reactlogo}/>
                    <Skill_Card image_link={clang}/>
                    <Skill_Card image_link={cpp}/>
                    <Skill_Card image_link={java}/>
                    <Skill_Card image_link={js}/>
                    <Skill_Card image_link={html}/>
                    <Skill_Card image_link={css}/>
                    <Skill_Card image_link={python}/>
                    <Skill_Card image_link={flask}/>
                    <Skill_Card image_link={linux}/>
                    <Skill_Card image_link={ps}/>
                    <Skill_Card image_link={pr}/>
                    <Skill_Card image_link={ai}/>
                    <Skill_Card image_link={dart}/>
                    <Skill_Card image_link={flutter}/>
                    <Skill_Card image_link={git}/>
                    <Skill_Card image_link={github}/>
                </div>

            </div>

            
            
        </div>

        
    );
}

export default Skills
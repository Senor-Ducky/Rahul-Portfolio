import Zoom from 'react-reveal/Zoom'

function Skill_Card(props) {

    return(
        <Zoom>
            <div className="flex-initial shadow-lg w-52 h-52 rounded-lg bg-purple-600">
                <div className=" flex justify-center px-10 py-10">
                    <img src={props.image_link}/>
                </div>
            </div>
        </Zoom>
    );
}

export default Skill_Card
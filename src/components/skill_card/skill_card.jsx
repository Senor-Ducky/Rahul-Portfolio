

function Skill_Card(props) {

    return(
        <div className="flex-initial shadow-lg w-52 h-52 rounded-lg bg-purple-600">
            <div className=" flex justify-center px-10 py-10">
                <img src={props.image_link}/>
            </div>
        </div>
    );
}

export default Skill_Card
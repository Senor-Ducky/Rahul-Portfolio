function BlueButton(props) {
    return(
        <button className="bg-purple-600 shadow-md rounded-full py-2 px-4"><a  className="font-bold text-white" href={props.link}>{props.buttonName}</a></button>
    );
}

export default BlueButton
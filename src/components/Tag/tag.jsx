import Slide from 'react-reveal/Slide'

function Tag(props) {
    return(
        <Slide left>
            <div className="container-fluid">
                <div className="flex justify-center">
                    <div className="border-b-4 border-purple-600   ">
                        <div className="p-2 font-bold text-center text-black">
                            {props.name}
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default Tag
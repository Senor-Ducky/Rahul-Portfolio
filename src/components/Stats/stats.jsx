import Tag from '../Tag/tag'

function Stats() {
    return(
        <div className="container-fluid sm:w-screen md:w-screen lg:w-screen px-10 py-20">
            <Tag name="Stats"/>
            
            <div className="container-fluid py-10">
                <img className="mx-auto" align="center" src="https://github-readme-stats.vercel.app/api?username=Senor-Ducky&show_icons=true&line_height=27&count_private=true&title_color=ffffff&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21" alt="Supreme's GitHub Stats" />
            </div>
        </div>
    );
}

export default Stats
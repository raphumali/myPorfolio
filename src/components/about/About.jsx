import './About.css'
import AboutMe from "../../img/bulb.jpg"

const About = () => {
    return(
        <div className="a">
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img
                    src={AboutMe}
                    alt='lightbulb'
                    className='a-img'
                    />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-sub'>About Me</h1>
                <p className='a-sub'>
                    Something Something Something
                </p>
                <p className='a-desc'>
                    More something something something
                </p>
            </div>
        </div>
    )
}

export default About;
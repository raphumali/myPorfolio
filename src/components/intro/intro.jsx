import "./intro.css"
import YYC from "../../img/yyc.jpeg"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">
                        Hello, My name is
                    </h2>
                    <h1 className="i-name">
                        Raphael Umali
                    </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Information Technology Major
                            </div>
                            <div className="i-title-item">
                                Web Developer
                            </div>
                            <div className="i-title-item">
                                IT Professional
                            </div>
                            <div className="i-title-item">
                                Software Developer
                            </div>
                            <div className="i-title-item">
                                Self-learner
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">Hello! My name is Raph,
                     and I am a recent graduate from SAIT's Information Technology program with a focus in Software Development.</p>
                </div>
            </div>
            <div className="i-right">
            <div className="i-bg"></div>
                <img src={YYC} alt="" className="i-img"/>
            </div>     
        </div>
    )
}

export default Intro;
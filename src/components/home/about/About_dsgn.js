import './About_dsgn.scss'
import './About_both.scss';

const About_dsgn = ({handleFlip, isFront}) => {
    return (
        <div id="me-right" className={isFront.right ? "front" : "back"} onClick= {() => handleFlip("right")}>
            <div id="mrBack">
                <div id="shadow-container"> <div id="mr-shadow"></div> </div>
                <p id="mrt1"> Let's Talk Design  </p>
                <p id="mrt2"> Let's Talk Design  </p>
                <p id="mright-para"> 
                    For me, design represents accessibility. Products should ideally be as intuitive to as many users as possible, regardless of their circumstances or identity. We must not only consider what we are displaying but also <i>who</i> we are displaying it to. That is why UI/UX research is so indispensable.
                </p>
            </div>

            <div id="mrSqr"></div>
            <div id="mr-CrcBr">
                <div id="mrBar"></div>
                <div id="mrCrc"></div>
            </div>
            <div id="mrTrg"> <div id="mriTrg"> </div> </div>
        </div>
    )
}

export default About_dsgn

import './About_dsgn.scss'
import './About_both.scss';

const About_dsgn = ({handleFlip, isFront}) => {
    return (
        <div className={isFront.right ? "me-right front" : "me-right back"} onClick= {() => handleFlip("right")}>
            <div className="mrBack">
                <div className="shadow-container"> <div className="mr-shadow"></div> </div>
                <p className="mrt1"> Let's Talk Design  </p>
                <p className="mrt2"> Let's Talk Design  </p>
                <p className="mright-para"> 
                    For me, design represents accessibility. Products should ideally be as intuitive to as many users as possible, regardless of their circumstances or identity. We must not only consider what we are displaying but also <i>who</i> we are displaying it to. That is why UI/UX research is so indispensable.
                </p>
            </div>
                <div className="mrSqr"></div>
            <div className="mr-CrcBr">
                <div className="mrBar"></div>
                <div className="mrCrc"></div>
            </div>
            <div className="mrTrg"> <div className="mriTrg"> </div> </div>
        </div>
    )
}

export default About_dsgn

import './About_code.scss';
import './About_both.scss';

const About_code = ({handleFlip, isFront}) => {
    return (
        <div className={isFront.left ? "me-left front" : "me-left back"}  onClick= {() => handleFlip("left")} >
            <div className={isFront.first ? "mlBack firstTime" : "mlBack nthTime"}>
                <div className="shadow-container"> <div className="ml-shadow"></div> </div>
                <p className="mlt1"> Let's Talk Code</p>
                <p className="mlt2"> Let's Talk Software</p>
                <p className="mleft-para"> 
                    For me, software development has always represented the great equalizer. It was novel to me that someone with only code and ingenuity could build something as game changing as the internet, AI or those self-checkout kiosk at Target. It is not servers or computers, but instead the minds behind them that are responsible for the improvement of so many lives. That is why I code.
                </p>
            </div>

            <div className={isFront.first ? "circuit firstTime" : "circuit nthTime"}>
                <div className="mlCrc1"></div>
                <div className="mlCrc2"></div>
                <div className="mlCrc3"></div>
                <div className="mlBar1"></div>
                <div className="mlBar2"></div>
            </div>
        </div>
    )
}

export default About_code

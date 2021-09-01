import './About_code.scss';
import './About_both.scss';


const About_code = ({handleFlip, isFront}) => {
    return (
        <div id="me-left" className={isFront.left ? "front" : "back"}  onClick= {() => handleFlip("left")} >
            <div id="mlBack" className={isFront.first ? "firstTime" : "nthTime"}>
                <div id="shadow-container"> <div id="ml-shadow"></div> </div>
                <p id="mlt1"> Let's Talk Code</p>
                <p id="mlt2"> Let's Talk Software</p>
                <p id="mleft-para"> 
                    For me, software development has always represented the great equalizer. It was novel to me that someone with only code and ingenuity could build something as game changing as the internet, AI or those self-checkout kiosk at Target. It is not servers or computers, but instead the minds behind them that are responsible for the improvement of so many lives. That is why I code.
                </p>
            </div>

            <div id="circuit" className={isFront.first ? "firstTime" : "nthTime"}>
                <div id="mlCrc1"></div>
                <div id="mlCrc2"></div>
                <div id="mlCrc3"></div>
                <div id="mlBar1"></div>
                <div id="mlBar2"></div>
            </div>
        </div>
    )
}

export default About_code

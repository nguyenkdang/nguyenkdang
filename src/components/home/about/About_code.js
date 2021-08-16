import './About_code.scss';
import './About_both.scss';


const About_code = ({handleFlip, isFront}) => {
    return (
        <div id="me-left" className={isFront.left ? "front" : "back"}  onClick= {() => handleFlip("left")} >
            <div id="mlBack" className={isFront.first ? "firstTime" : "nthTime"}>
                <div id="shadow-container"> <div id="ml-shadow"></div> </div>
                <p id="mlt1"> Let's Talk Code</p>
                <p id="mlt2"> Let's Talk Software</p>
                <p id="mleft-para">  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euis ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
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

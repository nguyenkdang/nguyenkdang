import './Home.scss';
import { AboutCode } from './about/AboutCode';
import About_dsgn from './about/About_dsgn';
import ProjectBadge from './projects/ProjectBadge';
import PythonLogo from './projects/language/PythonLogo';
import Mylogo from '../../svg/Mylogo';
import { useState } from 'react';
import { IntroSection } from './IntroSection/IntroSection';

const projInfo = {
    left: {
        title: 'Reddit Ranker',
        desc: "Ever wanted to know what Reddit is talking about? Reddit Ranker logs, sorts and displays any subreddit's most popular terms using multiple ranking methods and Reddit's official retrieval API",
        lang: PythonLogo,
    },
    middle: {
        title: 'Image Translator',
        desc: "Ever wanted to translate some text but only have an image? This python script can return a fully translated image using Google's Tesseract OCR and some math.",
        lang: PythonLogo,
    },
    right: {
        title: 'Investing Simulator',
        desc: 'Ever wanted to test which investing rule is most profitable? This modular Python script allows for the simulation and comparison of different investing strategy on real world market data.',
        lang: PythonLogo,
    },
};

const Home = ({ setprojScroll }) => {
    const [isFront, setFront] = useState({
        first: true,
        left: true,
        right: false,
    });

    const handleFlip = (lr) => {
        if (isFront[lr] === false) {
            if (lr === 'right' && isFront['first'] === true) {
                setFront({
                    first: !isFront['first'],
                    left: !isFront['left'],
                    right: !isFront['right'],
                });
            } else {
                setFront({
                    first: isFront['first'],
                    left: !isFront['left'],
                    right: !isFront['right'],
                });
            }
        }
    };

    return (
        <div className="home">
            <div id="head_logo">
                <Mylogo width="16vw" />
            </div>
            <IntroSection />
            <div className="myprojects">
                <h1 id="project-label"> My Projects </h1>
                <div className="projectBadges">
                    <div className="leftBadge">
                        <ProjectBadge
                            title={projInfo.left.title}
                            desc={projInfo.left.desc}
                            langLogo={<projInfo.left.lang size="4vw" />}
                            pos={1}
                            setprojScroll={setprojScroll}
                        />
                    </div>

                    <div className="middleBadge">
                        <ProjectBadge
                            title={projInfo.middle.title}
                            desc={projInfo.middle.desc}
                            langLogo={<projInfo.middle.lang size="4vw" />}
                            pos={0}
                            setprojScroll={setprojScroll}
                        />
                    </div>

                    <div className="rightBadge">
                        <ProjectBadge
                            title={projInfo.right.title}
                            desc={projInfo.right.desc}
                            langLogo={<projInfo.right.lang size="4vw" />}
                            pos={2}
                            setprojScroll={setprojScroll}
                        />
                    </div>
                </div>
            </div>
            <div className="aboutMe">
                <h1 id="aboutMe-label"> more about me </h1>
                <AboutCode handleFlip={handleFlip} isFront={isFront} />
                <About_dsgn handleFlip={handleFlip} isFront={isFront} />
            </div>
        </div>
    );
};

export default Home;

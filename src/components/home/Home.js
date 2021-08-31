import './Home.scss';
import About_code from './about/About_code';
import About_dsgn from './about/About_dsgn';
import Paint from './intro/Paint';
import ProjectBadge from './projects/ProjectBadge';
import PythonLogo from './projects/language/PythonLogo';
import Mylogo from '../../svg/Mylogo'
import { useState} from "react";

const projInfo= {
    left:{
        title: "Reddit Ranker",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis" +
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis ",
        lang: PythonLogo,

    },
    middle:{
        title: "Image Translator",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis" +
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis ",
        lang: PythonLogo,
    },
    right:{
        title: "Investing Simulator",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis" +
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis ",
        lang: PythonLogo,
    }
};


const Home = ({setprojScroll}) => {
    const [isFront, setFront] = useState({first:true, left: true, right: false});
    const [hiddenLinks, sethiddenLinks] = useState([false, false, false, false])


    const handleFlip = (lr) => {
        if(isFront[lr] === false){
            if(lr === "right" && isFront["first"] === true){
                setFront({first: !isFront["first"], left: !isFront["left"], right: !isFront["right"]});
            }
            else{
                setFront({first:isFront["first"], left: !isFront["left"], right: !isFront["right"]});
            }
        }
    };

    const handleHL = (i) => {
        const invert = [true, true, true, true]
        sethiddenLinks([...invert.slice(0,i), hiddenLinks[i], ...invert.slice(i+1)])        
    }

    const restHL = () => {
        sethiddenLinks([false,false,false,false])
    }
    
    return (
        <div className="home">
            <div id="head_logo">
                <Mylogo width="16vw"/>
            </div>
            <div id="intro">
                <div id="title_box"> 
                    <h2 className='my_slogan'> 
                        <a className={hiddenLinks[0]? "hidden_link hide" : "hidden_link in"} onMouseEnter={() => handleHL(0)} onMouseLeave={restHL} 
                            href="https://www.linkedin.com/in/nguyenkdang/" target="_blank" rel="noreferrer">in</a>
                        tuitive <a className={hiddenLinks[1]? "hidden_link hide" : "hidden_link be"}   onMouseEnter={() => handleHL(1)} onMouseLeave={restHL}
                                    href="https://www.behance.net/nguyenkdang" target="_blank" rel="noreferrer">be</a>autiful 
                        di<a className={hiddenLinks[2]? "hidden_link hide" : "hidden_link git"}   onMouseEnter={() => handleHL(2)} onMouseLeave={restHL}
                            href="https://github.com/nguyenkdang" target="_blank" rel="noreferrer">git</a>al
                        des<a className={hiddenLinks[3]? "hidden_link hide" : "hidden_link ig"}   onMouseEnter={() => handleHL(3)} onMouseLeave={restHL}
                            href="https://www.instagram.com/nguwaynedang/" target="_blank" rel="noreferrer">ig</a>n
                    </h2>
                    <h1 className="my_name"> Nguyen K Dang </h1>
                    <h2 className='my_title'> Software Developer & Visual Designer </h2>
                </div>
                <Paint/>
            </div>
            <div className="myprojects">
                <h1 id="project-label"> My Projects </h1>
                <div className="projectBadges">
                    <div className='leftBadge'>
                        <ProjectBadge title={projInfo.left.title} desc={projInfo.left.desc}
                        langLogo={<projInfo.left.lang size="4vw"/>} pos={1} setprojScroll={setprojScroll}/>
                    </div>
                    
                    <div className='middleBadge'>
                        <ProjectBadge  title={projInfo.middle.title} desc={projInfo.middle.desc}
                        langLogo={<projInfo.middle.lang size="4vw"/>} pos={0} setprojScroll={setprojScroll}/>
                    </div>

                    <div className='rightBadge'>
                        <ProjectBadge  title={projInfo.right.title} desc={projInfo.right.desc}
                        langLogo={<projInfo.right.lang size="4vw"/>} pos={2} setprojScroll={setprojScroll}/>
                    </div>
                </div>
            </div>
            <div className="aboutMe">
                <h1 id="aboutMe-label"> more about me </h1>
                <About_code handleFlip={handleFlip} isFront={isFront}/>
                <About_dsgn handleFlip={handleFlip} isFront={isFront}/>
            </div>
        </div>
    )
}

export default Home



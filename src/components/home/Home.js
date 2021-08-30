import './Home.scss';
import About_code from './about/About_code'
import About_dsgn from './about/About_dsgn'
import Paint from './intro/Paint'

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

const Home = () => {
    const [isFront, setFront] = useState({first:true, left: true, right: false});
    
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

    

    return (
        <div className="home">
            <div id="head_logo">
                <Mylogo width="16vw"/>
            </div>
            <div id="intro">
                <div id="title_box"> 
                    <h2 className='sc my_slogan'> <a className="hidden_link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank" rel="noreferrer">in</a>tuitive 
                        <a className="hidden_link" href="https://www.behance.net/nguyenkdang" target="_blank" rel="noreferrer"> be</a>autiful 
                        di<a className="hidden_link" href="https://github.com/nguyenkdang" target="_blank" rel="noreferrer">git</a>al
                        des<a className="hidden_link" href="https://www.instagram.com/nguwaynedang/" target="_blank" rel="noreferrer">ig</a>n</h2>
                    <h1 id="my_name"> Nguyen K Dang </h1>
                    <h2 className='sc my_title'> Software Developer & Visual Designer </h2>
                </div>
                <Paint/>
            </div>
            <div>
                <h1 id="project-label"> My Projects </h1>
            </div>
            <div id="aboutMe">
                <h1 id="aboutMe-label"> more about me </h1>
                <About_code handleFlip={handleFlip} isFront={isFront}/>
                <About_dsgn handleFlip={handleFlip} isFront={isFront}/>
            </div>
        </div>
    )
}

export default Home



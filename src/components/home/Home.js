import './Home.css';
import About_code from './about/About_code'
import About_dsgn from './about/About_dsgn'
import Paint from './intro/Paint'
import Badge from './projects/Badge'
import logo from '../../logo.svg'

const Home = () => {
    return (
        <div className="home">
            <div id="head_logo">
                <img src={logo}></img>
            </div>
            <div id="intro">
                <div id="title_box"> 
                    <h2 class='sc'> <a class="hidden_link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank">in</a>tuitive 
                        <a class="hidden_link" href="https://www.behance.net/nguyenkdang" target="_blank"> be</a>autiful 
                        di<a class="hidden_link" href="https://github.com/nguyenkdang" target="_blank">git</a>al
                        des<a class="hidden_link" href="https://www.instagram.com/nguwaynedang/" target="_blank">ig</a>n</h2>
                    <h1 id="my_name"> Nguyen K Dang </h1>
                    <h2 class='mc'> Software Developer & Visual Designer </h2>
                </div>
                <Paint/>
            </div>
            <div>
                <h1 id="project-label"> My Projects </h1>
                <Badge/>
            </div>
            <div id="aboutMe">
                <h1 id="aboutMe-label"> more about me </h1>
                <About_code/>
                <About_dsgn/>
            </div>
        </div>
    )
}

export default Home



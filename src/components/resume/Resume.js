import './Resume.scss'
import DlButton from './DlButton'
import rPDF from './resume.pdf'

const Resume = () => {
    return (
        <div className="resume">
          <div className="indent page">
            <div className="dl"> 
              <a clasName="dl_link" href={rPDF} download="Nguyen Dang - Resume.pdf">
                <DlButton size="3.5vw"/>
              </a>
            </div>
            <div>
              <h1 className="name">Nguyen K. Dang</h1>
              <h3 className="school">University of California Irvine Graduate</h3>
            </div>
            <div className="contact">
              <div className="same_ln">
                <h3 className="contact_info"> <b>Phone</b> 408-513-7511</h3>
                <h3 className="contact_info"> <b>Email</b> nguyenkhdang@gmail.com</h3>
              </div>
              <div className="same_ln">
                <h3 className="contact_info"> <b>Repository</b> <a className="link" href="https://github.com/nguyenkdang/" target="_blank" rel="noreferrer">github.com/nguyenkdang</a> </h3>
                <h3 className="contact_info"> <b>Linkedin</b> <a className="link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank" rel="noreferrer"> linkedin.com/in/nguyenkdang</a> </h3>
              </div>
            </div>
            <span className="education_break"></span>
  
            <div className="education">
              <h2>Education</h2>
              <div className="line"></div>
                <h3 className="same_ln">2016 - 2020</h3>
                <h3 className="same_ln">University of California Irvine, information & Computer Science</h3>
            </div>

            <span className="project_break"></span>
            <div className="projects">
              <h2>Projects</h2>
              <div className="line"></div>

              <h3 >2021</h3>
              <div className="project_desc">
                <h3 className="project_title">“Reddit Term Ranker”, Popular Reddit Topics Visualizer</h3>
                <h3 className="project_tool">Tool used - Python, Reddit API, Matplotlib</h3>
                <ul className="project_bullets">
                  <li> <span>Used official Reddit API to make request to server to retrieve post data </span></li>
                  <li> <span>Built a database from post data and used reverse indexing to rank term frequency</span></li>
                  <li> <span>Used Matplotlib to graph term ranks by multiple criteria, like count, score & density </span></li>
                </ul>  
              </div>

              <h3>2021</h3>
              <div className="project_desc">
                <h3 className="project_title">“Market Simulator”, Determines Best Investment Strategy</h3>
                <h3 className="project_tool">Tool used - Python, Yahoo Finance API, Pandas API</h3>
                <ul className="project_bullets">
                  <li><span>Used official Yahoo Finance API to retrieve historical stock market data</span></li>
                  <li><span>Implement multiple investing strategies modularly to allow for ease of testing</span></li>
                  <li><span>Ran short and long term simulation to verify investing strategy effectiveness</span></li>
                </ul>
              </div>

              <h3 >2019</h3>
              <div className="project_desc">
                <h3 className="project_title">“Spotify Set”, A Spotify UI Proposal</h3>
                <h3 className="project_tool">Tool used - Adobe XD, Adobe Illustrator, Adobe Photoshop</h3>
                <ul className="project_bullets">
                  <li><span>Conducted relevant market research on Spotify and its competitor</span></li>
                  <li><span>Built wireframes, mockups and interactive prototypes while adhering to Spotify’s brand</span></li>
                  <li><span>Presented proposal to stakeholders, using prototypes to reinforce understanding</span></li>
                </ul>
              </div>
    
              <h3 >2018</h3>
              <div className="project_desc">
                <h3 className="project_title">“Alchieve”, Alchohol Portioning & Tracking Web Application</h3>
                <h3 className="project_tool">Tool used - HTML, CSS, Javascript</h3>
              </div>
            </div>
  
            <div className="rel-skill">
              <h2>Relevant Skills</h2>
              <div className="line"></div>
              <div className="skills"> 
                <h3 className="info_row"> Python HTML Java CSS C++ JavaScript</h3>
                <h3 className="info_row">Excel SQL MySQL Figma <span className="sw">Yahoo Finance API</span></h3>
                <h3 className="info_row"> 
                  <span className="sw">Adobe Illustrator</span> 
                  <span className="sw"> Adobe Photoshop</span> 
                  <span className="sw">Adobe XD</span> 
                </h3>
              </div>
            </div>
            <div className="rel-course">
              <h2>Relevant Courses</h2>
              <div className="line"></div>
              <div className="courses">
                <h3 className="info_row"> 
                  <span className="sw">Artificial Intelligence</span> 
                  <span className="sw">Data Management</span>
                  <span className="sw">Machine Learning</span>
                </h3>
                <h3 className="info_row"> 
                  <span className="sw">Data Structure Implementation & Analysis</span> 
                  <span className="sw">Information Retrieval</span>
                </h3>
                <h3 className="info_row"> 
                  <span className="sw">Project in Databases & Web Applications</span> 
                  <span className="sw">Computer Vision</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Resume

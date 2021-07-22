//rafce
import './Resume.scss'

const Resume = () => {
    return (
        <div className="resume">
          <div id="page" className="indent">
            <div id="title">
              <h1 id="name">Nguyen K. Dang</h1>
              <h3 id="school">University of California Irvine Graduate</h3>
            </div>
            <div id="contact">
              <div className="same_ln">
                <h3 className="contact_info"> <b>Phone</b> 408-513-7511</h3>
                <h3 className="contact_info"> <b>Email</b> nguyenkhdang@gmail.com</h3>
              </div>
              <div className="same_ln">
                <h3 className="contact_info"> <b>Repository</b> <a className="link" href="https://github.com/nguyenkdang/" target="_blank">github.com/nguyenkdang</a> </h3>
                <h3 className="contact_info"> <b>Linkedin</b> <a className="link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank"> linkedin.com/in/nguyenkdang</a> </h3>
              </div>
            </div>
            <span id="education_break"></span>
  
            <div id="education">
              <h2>Education</h2>
              <div className="line"></div>
                <h3 className="same_ln">2016 - 2020</h3>
                <h3 className="same_ln">University of California Irvine, information & Computer Science</h3>
            </div>

            <span id="project_break"></span>
            <div id="projects">
              <h2>Projects</h2>
              <div className="line"></div>

              <h3 >2021</h3>
              <div className="project_desc">
                <h3 className="project_title">“Reddit Term Ranker”, Popular Reddit Topics Visualizer</h3>
                <h3 className="project_tool">Tool used - Python, Reddit API, Matplotlib</h3>
                <div className="project_bullets">
                  <h3 className="info_row">• Used official Reddit API to make request to server to retrieve post data</h3>
                  <h3 className="info_row">• Built a database from post data and used reverse indexing to rank term frequency</h3>
                  <h3 className="info_row">• Used Matplotlib to graph term ranks by multiple criteria, like count, score & density</h3>
                </div>  
              </div>

              <h3>2021</h3>
              <div className="project_desc">
                <h3 className="project_title">“Market Simulator”, Determines Best Investment Strategy</h3>
                <h3 className="project_tool">Tool used - Python, Yahoo Finance API, Pandas API</h3>
                <div className="project_bullets">
                  <h3 className="info_row">• Used official Yahoo Finance API to retrieve historical stock market data</h3>
                  <h3 className="info_row">• Implement multiple investing strategies modularly to allow for ease of testing</h3>
                  <h3 className="info_row">• Ran short and long term simulation to verify investing strategy effectiveness</h3>
                </div>
              </div>

              <h3 >2019</h3>
              <div className="project_desc">
                <h3 className="project_title">“Spotify Set”, A Spotify UI Proposal</h3>
                <h3 className="project_tool">Tool used - Adobe XD, Adobe Illustrator, Adobe Photoshop</h3>
                <div className="project_bullets">
                  <h3 className="info_row">• Conducted relevant market research on Spotify and its competitor</h3>
                  <h3 className="info_row">• Built wireframes, mockups and interactive prototypes while adhering to Spotify’s brand</h3>
                  <h3 className="info_row">• Presented proposal to stakeholders, using prototypes to reinforce understanding</h3>
                </div>
              </div>
    
              <h3 >2018</h3>
              <div className="project_desc">
                <h3 className="project_title">“Alchieve”, Alchohol Portioning & Tracking Web Application</h3>
                <h3 className="project_tool">Tool used - HTML, CSS, Javascript</h3>
              </div>
            </div>
  
            <div id="rel-skill">
              <h2>Relevant Skills</h2>
              <div className="line"></div>
              <div id="skills"> 
                <h3 className="info_row"> Python HTML Java CSS C++ JavaScript</h3>
                <h3 className="info_row">Excel SQL MySQL Figma <span className="sw">Yahoo Finance API</span></h3>
                <h3 className="info_row"> 
                  <span className="sw">Adobe Illustrator</span> 
                  <span className="sw"> Adobe Photoshop</span> 
                  <span className="sw">Adobe XD</span> 
                </h3>
              </div>
            </div>
            <div id="rel-course">
              <h2>Relevant Courses</h2>
              <div className="line"></div>
              <div id="courses">
                <h3 className="info_row"> 
                  <span className="sw">Artificial Intelligence</span> 
                  <span className="sw">Data Management</span>
                  <span className="sw">Machine Learning</span></h3>
                <h3 className="info_row"> 
                  <span className="sw">Data Structure Implementation & Analysis</span> 
                  <span className="sw">Information Retrieval</span></h3>
                <h3 className="info_row"> 
                  <span className="sw">Project in Databases & Web Applications</span> 
                  <span className="sw">Computer Vision</span></h3>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Resume

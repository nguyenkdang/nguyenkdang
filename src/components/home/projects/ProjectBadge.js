import './Projectbadge.scss'
import { Link } from 'react-router-dom';

const ProjectBadge = ({title, langLogo, desc,  pos, setprojScroll}) => {
    return (
        <div className='ProjectBadge'>
            <div className='badgeBack'>
                <Link onClick={()=> setprojScroll(pos)} to="projects"> 
                    <div className="infoSec">
                        <div className="infoSec-back"></div>
                        <div className="infoCircle">
                            <h3 className="info-symbol">i </h3>  
                        </div>
                        <h2 className='moreinfo'> more info</h2>
                    </div>
                </Link>
                
                <div className="insideLine">
                    <p className="bdage-title"> {title} </p>
                    <p className="bdage-desc"> {desc} </p>
                </div>
                
            </div>
            <div className="badgeArmor"></div>
            <div className="badgeBeak">
                <div className="langLogo"> {langLogo} </div>
            </div>
        </div>
    )
}

export default ProjectBadge

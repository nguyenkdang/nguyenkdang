import { useState } from "react";
import './Projects.scss'
import ProjItem from './ProjItem'
import Logo_github from '../../svg/Logo_github'
import translateIcon from './project_icons/translateIcon'
import moneyUpIcon from './project_icons/moneyUpIcon'
import recordIcon from './project_icons/recordIcon'
import medalIcon from './project_icons/medalIcon'



const projs = [
    {
    id: 0,
    logo: translateIcon,
    tags: ["Python", "NumPy", "Matplotlib", "Pytesseract"],
    link: {type: 'Github', url: 'https://github.com/nguyenkdang/imageTranslator'},
    title: "Image Translator",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh" +
    "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad" +
    "minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut" + 
    "aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in" +
    "vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis"+
    "at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril" +
    "delenit augue duis dolore te feugait nulla facilisi." +
    "minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut" + 
    "aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in" +
    "vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis"+
    "at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril" +
    "delenit augue duis dolore te feugait nulla facilisi."
    },
    {
    id: 1,
    logo: medalIcon,   
    tags: ["Python", "Reddit API", "Matplotlib"],
    link: {type: 'Github', url: 'https://github.com/nguyenkdang/RedditTermScraper'},
    title: "Reddit Rank",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh" +
    "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad" +
    "minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut" + 
    "aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in" +
    "vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis" +
    "at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril" +
    "delenit augue duis dolore te feugait nulla facilisi."
    },
    {
    id: 2,
    logo: moneyUpIcon,
    tags: ["Python", "Yahoo Finance API", "Pandas API"],
    link: {type: 'Github', url: 'https://github.com/nguyenkdang/InvestingStrategySim'},
    title: "Investing Strategy Simulator",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh" +
    "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad" +
    "minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut" + 
    "aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in" +
    "vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis" +
    "at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril" +
    "delenit augue duis dolore te feugait nulla facilisi."
    },  
    {
    id: 3,
    logo: recordIcon,
    tags: ["Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
    link: {type: 'Behance', url: 'https://www.behance.net/gallery/81925111/Spotify-Set-Concept'},
    title: "Spotify Set",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh" +
    "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad" +
    "minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut" + 
    "aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in" +
    "vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis" +
    "at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril" +
    "delenit augue duis dolore te feugait nulla facilisi."
    }
]

const Projects = () => {
    const [isOpen, setOpen] = useState(
        { 
            blur: false,
            opn: projs.map((p) => false)
        }
    );

    const handleOpen = (id) => {
        const future = [...isOpen.opn.slice(0, id), !isOpen.opn[id], ...isOpen.opn.slice(id+1)]
        if(isOpen.opn.every((val) => val === false) || future.every((val) => val === false) ){
            setOpen({blur: !isOpen.blur, opn:future});
        }
    };

    const reset = () => {
        setOpen({ 
            blur: false,
            opn: projs.map((p) => false)
        })
    }

    const lsize = '10vw'
    return (
        <div className="Projects">
            <div className="badge_container">
                {projs.map((p) => (<ProjItem key={p.id} ptitle={p.title} pdesc={p.desc} 
                logo={<p.logo width={lsize} height={lsize}/>} ptags={p.tags} link={p.link} 
                id={p.id} isOpen={isOpen} handleOpen={handleOpen}/>))}       
                <div className={isOpen.blur ? "projCover vis" : "projCover"} onClick={reset}> </div>
            </div>
        </div>
    )
}

export default Projects

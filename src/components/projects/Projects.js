import { useState } from "react";
import './Projects.scss'
import ProjItem from './ProjItem'

const projs = [
    {
    id: 0,
    tags: ["C++", "HTML", "SCSS"],
    git: "https://github.com/nguyenkdang/imageTranslator",
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
    tags: ["C++", "HTML", "SCSS"],
    git: false,
    title: "Image Translator",
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
    tags: ["C++", "HTML", "SCSS"],
    git: false,
    title: "Image Translator",
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
    tags: ["C++", "HTML", "SCSS"],
    git: false,
    title: "Image Translator",
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
        if(isOpen.opn.every((val) => val == false) || future.every((val) => val == false) ){
            setOpen({blur: !isOpen.blur, opn:future});
        }
    };

    const reset = () => {
        setOpen({ 
            blur: false,
            opn: projs.map((p) => false)
        })
    }

    return (
        <div className="Projects">
            <div className="badge_container">
                {projs.map((p) => (<ProjItem ptitle={p.title} pdesc={p.desc} ptags={p.tags} git={p.git} id={p.id} isOpen={isOpen} handleOpen={handleOpen}/>))}       
                <div className={isOpen.blur ? "projCover vis" : "projCover"} onClick={reset}> </div>
            </div>
        </div>
    )
}

export default Projects

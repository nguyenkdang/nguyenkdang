import { useState } from "react";
import './Projects.scss'
import ProjItem from './ProjItem'
import translateIcon from './project_icons/translateIcon'
import moneyUpIcon from './project_icons/moneyUpIcon'
import recordIcon from './project_icons/recordIcon'
import medalIcon from './project_icons/medalIcon'

const Projects = () => {
    const projs = [
        {
        id: 0,
        logo: translateIcon,
        tags: ["Python", "NumPy", "Matplotlib", "Pytesseract"],
        link: {type: 'Github', url: 'https://github.com/nguyenkdang/imageTranslator'},
        title: "Image Translator",
        desc: "Image Translator is a Python script that uses a version of Google's Tesseract OCR to take and image with foreign text and translate them to a language of the user's desire. The steps to achieving this is",
        dext:" as follow: (1) Extract text from an image using Google's Tesseract OCR, (2) Translate them to the appropriate language, (3) use language processing to increase readability, (4) overlay the translated text onto a copy of the image. Correctly calibrating Google's Tesseract OCR is critical to correctly translating the extracted text. Formatting the final image is also important, so the script makes sure to try to only cover text elements with their translated version, and not any other visuals."
       
        },
        {
        id: 1,
        logo: medalIcon,   
        tags: ["Python", "Reddit API", "Matplotlib"],
        link: {type: 'Github', url: 'https://github.com/nguyenkdang/RedditTermScraper'},
        title: "Reddit Rank",
        desc: "Using Reddit's Official data retrieval API, this program aims to log and rank the most popular term(s) in a specific subreddit. Ranking results are graphed and exported using Matplotlib for user friendly viewing.",
        dext:" Unlike similar application, Reddit Rank provides a wide variety of ranking options to help strengthen result validity. Options includes ranking by count, density, score and even context. An inverted index was implemented to increase performance of the ranking function when scraping through larger and more popular subreddits. Stop words are also automatically excluded to make final ranking results more relevant to users. Logs are locally stored for other projects."
        },
        {
        id: 2,
        logo: moneyUpIcon,
        tags: ["Python", "Yahoo Finance API", "Pandas API"],
        link: {type: 'Github', url: 'https://github.com/nguyenkdang/InvestingStrategySim'},
        title: "Investing Strategy Simulator",
        desc: "A Python based simulator aimed to answer the question of which investment strategy is the most optimal in both short and long term. The simulation is ran using real historical market data",
        dext:" retrieved using the Yahoo’s finance API. This means users can go back to as far as they want and run the simulation to see how their investing strategy would have performed from weeks to even decades. Investing strategy are also modular so users can create investing strategies that fit their testing needs. For example, users can specify to buy when prices are historically low and sell when a certain profit margins. Simulations are also ran against controls to strengthen result validity."
        },  
        {
        id: 3,
        logo: recordIcon,
        tags: ["Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
        link: {type: 'Behance', url: 'https://www.behance.net/gallery/81925111/Spotify-Set-Concept'},
        title: "Spotify Set",
        desc: "Spotify Set is a feature proposal for the popular music streaming platform Spotify. The feature addresses the need for service to evolve in an ever-growing market of content creators and streaming.",
        dext:" The proposed feature enables users to host their own live listening parties using music already licensed by Spotify. Much like a DJ, the host would also have the tools to remix music and take request from listeners. These interaction forms could increase retention rate of users, while creating a new stream of content for the platform to promote. Spotify Set could create an opportunity for the service to take its first big step into the lucrative market of live streaming and content creation."
        }
    ]

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
                {projs.map((p) => (<ProjItem key={p.id} ptitle={p.title} pdesc={p.desc} pdext={p.dext}
                logo={<p.logo width={lsize} height={lsize}/>} ptags={p.tags} link={p.link} 
                id={p.id} isOpen={isOpen} handleOpen={handleOpen}/>))}       
                <div className={isOpen.blur ? "projCover vis" : "projCover"} onClick={reset}> </div>
            </div>
        </div>
    )
}

export default Projects

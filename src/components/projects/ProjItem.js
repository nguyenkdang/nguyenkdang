import "./ProjItem.scss"

const ProjItem = ({ptitle, pdesc, ptags, git, id, isOpen, handleOpen }) => {
    return (
        <div className={!isOpen.opn[id] && isOpen.blur ? "ProjItem blur" : "ProjItem unblur"}>
            <div className="proj_iconBack"></div>
            <div className={isOpen.opn[id] ? "proj_body open" : "proj_body close"}>
                <div className="ptags">
                    {ptags.map((tag) => (<h3 className="ptag"> {tag} </h3>))}
                    {!git? "" :  <a className="ptag pgittag" href={git} target="_blank" rel="noreferrer">Github</a>}
                </div>
                <div className="pinfo">
                    <h2 className="proj_title"> {ptitle}</h2>
                    <p className="proj_desc"> {pdesc.slice(0,200)} <span className="proj_descExt"> {pdesc.slice(200,825)} </span></p>
                </div>
                <div className="proj_more" onClick={() => handleOpen(id)}> 
                    <svg className="down_icon" xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" viewBox="0 0 24 24">
                        <path className="cls-1" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}



export default ProjItem

const RelationshipItem = ({src,beforeClass}) => {
    
    const changeSocialIcon = (img)=> {img.src = img.src.replace(".png" , "-light.png")}
    const changeSocialIconDefault = (img)=> {img.src = img.src.replace("-light.png" , ".png")}

    return (

    <div className={"socialMediaIcons relative -z-1 overflow-hidden border border-[#ccc] rounded-[9px] " + beforeClass} onMouseOver={(e)=> changeSocialIcon(e.target.firstChild || e.target)} onMouseOut={(e)=> changeSocialIconDefault(e.target.firstChild || e.target)}>

        <img src={"../src/assets/images/footer/" + src} alt="" className="p-2 z-10 relative" />

    </div>

  )
}

export default RelationshipItem
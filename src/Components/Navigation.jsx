import "../styles/destination.css"
import { about,navLinks,NavList } from "../../index"


function Navigation (){
    return <nav>
    <ul>
{
    navLinks.map((link,index)=>{
        return<>
            <NavList direct={`/${link.link}`} 
            label={link.link} 
            icon={link.icon}
            key={index}
            />
        </>
    })
}
    </ul>
    </nav>
}

export default Navigation
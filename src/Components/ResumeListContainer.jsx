import "../styles/destination.css";
import {ResumeList} from "../../index"

function ResumeListContainer ({category,data}){
    return <ol>
{
  category ==="education"?  
  data.map((item,index)=>{
    return <li key={index} className="sub-list">
    <ResumeList title={item.title} date={item.date} description={item.description} key={index}/>
    </li>
  }):category ==="experience"?
  data.map((item,index)=>{
    return<li key={index} className="sub-list">
    <ResumeList title={item.title} date={item.date} description={item.description} key={index}/>
    </li>
  }):""
}
    </ol>
}

export default ResumeListContainer
import "../styles/destination.css";

function ResumeList({ title,date,description }) {
  return  <>
  <li className="title-list">{title}</li>
  <li>{date}</li>
  <li>{description}</li>
  </>
}

export default ResumeList;

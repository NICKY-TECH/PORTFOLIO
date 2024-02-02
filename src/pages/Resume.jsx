import { ResumeItem, PageHeader } from "../../index";
import "../styles/destination.css";
import {
  ResumeListContainer,
  ResumeList,
  education,
  experience,
} from "../../index";

function Resume() {
  return (
    <section className="body">
      <div className="about">
        <PageHeader heading="Resume" />
        <section className="resume-section">
          <ResumeItem item="Education" />
          <ResumeListContainer category="education" data={education} />

          <ResumeItem item="Experience" />
          <ResumeListContainer category="experience" data={experience} />
        </section>
      </div>
      <section className="skills">
        
      </section>
    </section>
  );
}

export default Resume;

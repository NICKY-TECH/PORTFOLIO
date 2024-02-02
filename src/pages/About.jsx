import PageHeader from "../Components/PageHeader";
import "../styles/destination.css";

function About() {
  return (
    <section className="body">
   <div className="about">
   <PageHeader heading="About Me" />
      <section className="main-content">
        <div className="about-content">
          HI, I'm a Fullstack web developer who is passionate about what she
          does. I believe that if it can be imagined then it can be Implemented,
          we just have to put the right resources together. I am aimed at
          developing solutions through software development not just any
          solution but useful solutions which also focuses on the end user. I
          thrive at creating solutions which are scalable, useful and meets both
          end users and customers needs. With my development and critical thinking skill let's begin our journey of developing impactful solutions. I am ever ready to learn and grow.
        </div>
        <section className="what-i-do">
        <div className="what-i-do-title">What I Do</div>
        <div className="frontend">
        <p>Front Development</p>
        <div>
            I develop high quality professional websites with my focus being quality,security, usability and meeting customer requirements
        </div>

        </div>
        <div className="backend">
        <p>Backend Development</p>
        <div>
            I develop efficient and secured backend services with my focus being , quality, efficiency, security, scalability, effectiveness and meeting customer needs
        </div>

        </div>


        </section>
      </section>
   </div>
    </section>
  );
}

export default About;

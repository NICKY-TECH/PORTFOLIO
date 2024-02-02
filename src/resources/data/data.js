import { resume, blog, portfolio, about } from "../../../index.jsx";

const navLinks = [
  { link: "About", icon: about },
  { link: "Resume", icon: resume },
  { link: "Portfolio", icon: portfolio },
  { link: "Blog", icon: blog },
];

const education = [
  {
    title: "University of Benin",
    date: "2018-2023",
    description:
      "I studied at the University of Benin where I major in Computer Science for my Bsc being equipped with foundations in various branches of computer science such as design and Implementation Algorithms, C, C++, Data Structure, Critical thinking,Pascal, Fortran, Operating System,The Architecture of a computer, Problem solving skills.",
  },
];

const experience=[
    {
        title:"Software Documentarian at PEAR SDC Benin City, Edo State",
        date:"September 2022 – December 2022",
        description:"I worked closely with other senior developers during the software development process. I documented the work flow, tested added features, seeded the database and suggested some possible fix for the product given that I had a foundation in JAVASCRIPT and an understanding of backend development. I also learnt about the laravel framework and worked on a personal project using the laravel PHP framework."
    },{
        title:"Web Developer Intern at EDO JOBS Benin City, Edo State",
        date:"January 2022-July 2022",
        description:"Worked at Edojob in Nigeria as an intern where I learnt about backend development using node.js, I also learnt about some industry standard terms and technologies. I had the opportunity of learning standard work ethics and collaborated on some projects with other interns through the utilization of github as a collaboration tool. I worked on the development of a blog site API(the backend of the project); I worked with MongoDB and express. I learnt about creativity in terms of web development."
    }

]

export { navLinks, education,experience };

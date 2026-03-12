import "./About.css";
import photo from "../../assets/about-author.webp";

function About() {
  return (
    <section className="about">
      <img src={photo} alt="Ben Anderson" className="about__photo" />

      <div className="about__description">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi I'm Ben Anderson, a full-stack developer with a background in
          finance. I've trained with TripleTen's software engineering program
          where I built projects with the MERN stack: MongoDB, Express, React,
          and Node.js. My finance background gives me a sharp eye for detail and
          analytical thinking, which are essential skills for software
          development.
        </p>
        <p className="about__text">
          I'm excited to bring my new skills into production with apps that are
          both functional and intuitive. If you're looking for a developer who
          can bridge the gap between technical execution and real-world problem
          solving, I'd love to connect.
        </p>
      </div>
    </section>
  );
}

export default About;

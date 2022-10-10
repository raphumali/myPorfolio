import "./About.css";
import AboutMe from "../../img/me.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutMe} alt="lightbulb" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-sub">About Me</h1>
        <p className="a-sub">Something Something Something</p>
        <p className="a-desc">
          I'm 22 years old living in Calgary, Alberta, and I have a passion for
          coding and technology. In 2020 I decided to school to learn about the
          IT world and Software Development. During my 2 years spent at SAIT, I
          got the priviledge to learn and gain experiences with languages and
          tools such as Java, SQL, HTML, CSS, React.js, Github, IT Support,
          VSCode and Eclipse.
        </p>
        <p>
          Some hobbies (other than coding) include working out, playing video
          games and watching movies. Scroll down to get in touch with me!
        </p>
      </div>
    </div>
  );
};

export default About;

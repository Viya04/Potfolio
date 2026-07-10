
import "./About.css"; 

function About() {
  return (
    <section id="about" className="about">

    <h2>About Me</h2>

    <div className="about-container">

        <div className="about-text">

            <p>
                Hi, I'm Chinta Vidyadhari, an undergraduate B.Tech student
                passionate about frontend development. I enjoy building modern,
                responsive web applications using React and continuously learning
                new technologies.
            </p>

            <br />

            <p>
                My goal is to become a skilled software engineer who creates
                intuitive and impactful digital experiences.
            </p>

        </div>

        <div className="education-card">

            <h3>🎓 Education</h3>

            <p><strong>B.Tech (UG)</strong></p>

            <p>CGPA : <strong>8.13 / 10</strong></p>

            <p>2022 – 2026</p>

        </div>

    </div>

</section>
  );
}

export default About;
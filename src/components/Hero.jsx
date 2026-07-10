import "./Hero.css";

function Hero() {
  return (
    <section id = "home" className="hero">
      <div className="hero-content">

        <p>👋 Hello, I'm</p>

        <h1>Chinta Vidyadhari</h1>
        <br />
        <h2>B.Tech Undergraduate | Open to Opportunities</h2>
        <br />
        <p>
          I enjoy building responsive, interactive web applications using React and am actively seeking software development opportunities.
        </p>
       <br />

       <div className="buttons">
  <a
    href="/Chinta_Vidyadhari_Resume.pdf"
    download
    className="resume-btn"
  >
    Download Resume
  </a>
</div>
      </div>

      <div className="hero-image">

  <div className="code-window">

    <div className="window-header">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
    </div>

    <pre>
{`const developer = {
  name: "Chinta",
  role: "Aspiring Frontend Developer",
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB"
  ],
  status: "Open to Work"
};`}
    </pre>

    <span className="cursor">|</span>

  </div>

</div>
    </section>
  );
}

export default Hero;
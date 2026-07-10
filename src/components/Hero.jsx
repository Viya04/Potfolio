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

   <pre className="code-block">
  <code>
    <span className="keyword">const</span>{" "}
    <span className="variable">developer</span>{" "}
    <span className="operator">=</span>{" "}
    <span className="brace">{"{"}</span>

    {"\n  "}
    <span className="property">name</span>
    <span className="colon">:</span>{" "}
    <span className="string">"Vidya"</span>
    <span className="comma">,</span>

    {"\n  "}
    <span className="property">role</span>
    <span className="colon">:</span>{" "}
    <span className="string">"Aspiring Frontend Developer"</span>
    <span className="comma">,</span>

    {"\n  "}
    <span className="property">skills</span>
    <span className="colon">:</span>{" "}
    <span className="brace">[</span>

    {"\n    "}
    <span className="string">"React"</span>
    <span className="comma">,</span>

    {"\n    "}
    <span className="string">"JavaScript"</span>
    <span className="comma">,</span>

    {"\n    "}
    <span className="string">"Node.js"</span>
    <span className="comma">,</span>

    {"\n    "}
    <span className="string">"MongoDB"</span>

    {"\n  "}
    <span className="brace">]</span>
    <span className="comma">,</span>

    {"\n  "}
    <span className="property">status</span>
    <span className="colon">:</span>{" "}
    <span className="string">"Open to Work"</span>

    {"\n"}
    <span className="brace">{"};"}</span>
  </code>
</pre>

    <span className="cursor">|</span>

  </div>

</div>
    </section>
  );
}

export default Hero;
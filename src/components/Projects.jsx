import "./Projects.css";
import {
  FaGlobe,
  FaPlane,
  FaBroadcastTower,
  FaGamepad,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      icon: <FaGlobe />,
      title: "MERN Stack Project",
      description:
        "Full-stack web application built using MongoDB, Express, React and Node.js.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      icon: <FaPlane />,
      title: "Autonomus UAV",
      description:
        "Designed and developed a drone-based surveillance system with embedded hardware.",
      tech: ["Arduino", "IoT", "Sensors"],
    },
    {
      icon: <FaBroadcastTower />,
      title: <>Modulation Schemes using <br/> MATLAB GUI</>,
      description:
        "GUI application demonstrating ASK, FSK and PSK modulation techniques.",
      tech: ["MATLAB", "GUI"],
    },
    {
      icon: <FaGamepad />,
      title: "2048 Game",
      description:
        "Developed the classic 2048 puzzle game using Python.",
      tech: ["Python"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <p>
        A collection of projects showcasing my skills in web development,
        programming, and engineering.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-icon">{project.icon}</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
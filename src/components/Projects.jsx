import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-content">
                                <h3>{project.Title}</h3>
                                <div className="tech-stack">
                                    {project.TechStack.split(',').map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech.trim()}</span>
                                    ))}
                                </div>
                                <p>{project.Description}</p>
                                <div className="project-links">
                                    {project.Link && (
                                        <a href={project.Link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--card-bg);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .project-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-content h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #d4d4d4;
        }
        .project-content p {
          color: #a3a3a3;
          margin-bottom: 2rem;
          flex: 1;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-color);
          font-weight: 500;
        }
        .project-link:hover {
          text-decoration: underline;
        }
      `}</style>
        </section>
    );
};

export default Projects;

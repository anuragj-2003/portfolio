import { motion } from 'framer-motion';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-content">
                                <div className="exp-header">
                                    <h3>{exp.Role}</h3>
                                    <span className="duration">{exp.Duration}</span>
                                </div>
                                <h4>{exp.Company}</h4>
                                <p>{exp.Description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 3rem;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent-color);
          border: 3px solid var(--bg-color);
        }
        .timeline-content {
          background: var(--card-bg);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .exp-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        .duration {
          font-size: 0.9rem;
          color: #a3a3a3;
          font-family: monospace;
        }
        .timeline-content h4 {
          color: var(--accent-color);
          margin-bottom: 1rem;
        }
        .timeline-content p {
          color: #d4d4d4;
        }
      `}</style>
        </section>
    );
};

export default Experience;

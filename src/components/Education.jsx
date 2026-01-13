import { motion } from 'framer-motion';

const Education = ({ education }) => {
    return (
        <section id="education" className="education">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="edu-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="edu-header">
                                <h3>{edu.Degree}</h3>
                                <span className="year">{edu.Year}</span>
                            </div>
                            <h4>{edu.Institution}</h4>
                            <p>{edu.Description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .edu-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease;
        }
        .edu-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .edu-header h3 {
          font-size: 1.25rem;
          color: var(--text-color);
          margin: 0;
        }
        .year {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .edu-card h4 {
          color: #a3a3a3;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .edu-card p {
          color: #d4d4d4;
        }
        
        @media (min-width: 768px) {
          .education-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }
      `}</style>
        </section>
    );
};

export default Education;

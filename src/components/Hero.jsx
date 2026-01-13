import { motion } from 'framer-motion';

const Hero = ({ details }) => {
  const getDetail = (key) => details.find(d => d.Key === key)?.Value || '';

  const name = getDetail('Name');
  const title = getDetail('Title');
  const bio = getDetail('Bio');

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hello, I'm</span>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p className="bio">{bio}</p>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="/data/resume/resume.pdf" download className="btn btn-outline">Download Resume</a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Navbar height */
        }
        .hero-container {
          display: flex; /* Changed to flex for centering */
          justify-content: center;
          align-items: center;
          text-align: center; /* Center text */
        }
        .hero-content {
           max-width: 800px;
           margin: 0 auto;
           display: flex;
           flex-direction: column;
           align-items: center;
        }
        .greeting {
          color: var(--accent-color);
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }
        .hero h2 {
          font-size: 1.5rem;
          text-align: center; /* Center text */
          margin-bottom: 1.5rem;
          background: none;
          -webkit-text-fill-color: var(--text-color);
          opacity: 0.8;
        }
        .bio {
          font-size: 1.1rem;
          color: #a3a3a3;
          margin-bottom: 2rem;
          max-width: 600px; /* Increased width */
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center; /* Center buttons */
        }
        .btn {
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background: var(--accent-color);
          color: white;
        }
        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }
        .btn-outline {
          border: 2px solid var(--text-color);
          color: var(--text-color);
        }
        .btn-outline:hover {
          background: var(--text-color);
          color: var(--bg-color);
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .hero h1 {
            font-size: 4.5rem;
          }
          .hero h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

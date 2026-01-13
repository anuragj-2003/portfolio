

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">


      </div>

      <style>{`
        .footer {
          padding: 2rem 0;
          background: var(--secondary-bg);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 5rem;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          color: #a3a3a3;
          font-size: 0.9rem;
        }
        .made-with {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .heart {
          color: #ef4444;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

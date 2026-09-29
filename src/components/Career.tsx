import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc (Hons) in Information Technology</h4>
                <h5>University of Vavuniya (UOV)</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing a comprehensive IT degree covering software engineering, database management, networking, web development, and system analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Information Technology</h4>
                <h5>Esoft Metro Campus</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Pursuing a comprehensive IT diploma covering basic IT knowledge including software engineering, databases, and networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation</h4>
                <h5>CodeVamp Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I build intelligent systems that automate workflows, process data, and handle user interactions. 
              I leverage AI technologies to create solutions that enhance efficiency and user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend developer</h4>
                <h5>Adtek</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Built and delivered 8+ responsive web applications using React and modern frontend tools.
              Focused on performance, SEO, and interactive features to drive user engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend developer</h4>
                <h5>Mafias Studios</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Built responsive websites using React and modern frontend tools.
              Focused on UI quality, compatibility, and efficient project delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>US IT Recruiter</h4>
                <h5>DEXIAN</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Managed end-to-end recruitment across US & Canada markets.
              Specialized in W2, C2C/T4, and H1B visa hiring for diverse technical roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

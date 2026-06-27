import "./styles/Career.css";
import { config } from "../config";

const formatPeriod = (period: string) => {
  if (period.includes("Present")) {
    return { start: period.split(" - ")[0], end: "PRESENT", isCurrent: true };
  }
  if (period.includes(" - ")) {
    const [start, end] = period.split(" - ");
    return { start, end, isCurrent: false };
  }
  return { start: period, end: "", isCurrent: false };
};

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
          {config.experiences.map((exp, index) => {
            const { start, end, isCurrent } = formatPeriod(exp.period);
            return (
              <div key={index} className="career-info-box">
                <div className={`career-entry-dot ${isCurrent ? "career-entry-dot-current" : ""}`}></div>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                    <div className="career-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="career-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="career-period">
                    {isCurrent && <span className="career-current-badge">CURRENT</span>}
                    <h3 className="career-period-end">{end}</h3>
                    <h3 className="career-period-start">{start}</h3>
                  </div>
                </div>
                <p>{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;

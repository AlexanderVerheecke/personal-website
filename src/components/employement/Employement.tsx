import { useState, useEffect } from "react";
import "./Employement.scss";
import { Briefcase, Award, ChevronRight } from "lucide-react";
import { useColor } from "../../ColorContext";
import { getColorForLanguage } from "../../utils/ColorUtils";

const Employment = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { currentColor } = useColor();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const achievements = [
    "Automated data processing workflows cutting processing time by 70%",
    "Engineered a user-friendly data submission portal resulting in a 50% decrease in user-reported isses",
    "Developed interactive geographical data visualisations, icnreasing user engagement by 25%",
    "Architected a WCAG 2.1 AA-compliant responsive frontend improving accessibiliy across the board",
    "Improved scalabale backend, implementing robust user authentication and data encryption",
    "Implemented comprehensive testing strategy, including unit, integration, and E2E tests, reducing critical bugs by 75%",
  ];

  const employmentSkills = [
    "Python",
    "Django",
    "Jupyter",
    "React",
    "TypeScript",
    "Java",
  ];

  return (
    <div className="employment-card">
      <div className="card-header">
        <h2 className="card-title">
          <Briefcase
            className="icon highlight"
            style={{ color: currentColor }}
          />{" "}
          Employment
        </h2>
        <p className="card-subtitle">
          Software Developer - Scott Logic [2022 - Present]
        </p>
      </div>
      <div className="card-content">
        <p className="job-description">
          I am responsible for designing, developing, and testing software
          components, ensuring high-quality code and adherence to best
          practices.
        </p>
        <div className="achievement-skills-container">
          <button
            onClick={() => setShowAchievements(!showAchievements)}
            className="toggle-button"
          >
            {showAchievements ? "Hide Achievements" : "Show Achievements"}
            <ChevronRight
              className={`arrow ${showAchievements ? "down" : "right"}`}
            />
          </button>
          {!isSmallScreen && (
            <div className="skills_employment">
              {employmentSkills?.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag"
                  style={{ backgroundColor: getColorForLanguage(skill) }}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
        {showAchievements && (
          <div className="achievements-and-skills">
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <Award className="icon" stroke={currentColor} />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            {isSmallScreen && (
              <div className="skills_employment">
                {employmentSkills?.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag"
                    style={{ backgroundColor: getColorForLanguage(skill) }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Employment;

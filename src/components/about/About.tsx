// About.tsx
import "./About.scss";
import Image from "react-bootstrap/Image";
import { useEffect, useCallback } from "react";
import { useColor } from "../..//ColorContext";

const colors = [
  "#FF00FF", // Magenta
  "#DC143C", // Crimson
  "#4169E1", // Royal Blue
  "#228B22", // Forest Green
];

const About: React.FC = () => {
  const { currentColor, setColor } = useColor();

  useEffect(() => {
    // setColor("blue");
  }, [setColor]);

  const getRandomColor = useCallback((): string => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    return newColor;
  }, [currentColor]);

  const handleMouseEnter = useCallback(() => {
    const newColor = getRandomColor();
    setColor(newColor);
  }, [getRandomColor, setColor]);

  return (
    <section id="about" className="about-section">
      <Image
        src="/me.jpg"
        alt="Image of Alex Verheecke"
        className="about-image"
        roundedCircle
        fluid
      />
      <div className="about-content">
        <h1 className="about-title">
          <span
            className="highlight"
            style={{ color: currentColor }}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleMouseEnter}
          >
            Hi
          </span>
          , I'm Alex
        </h1>
        <div className="about-description">
          <p>
            a software developer from the UK. Lover of all things diving, travelling, and
            the oxford comma. I work at scottlogic where I currently spend most
            of my time building tools for visual data management.
          </p>
          <p>
            Some projects I've worked on include:
            <ul>
              <li>
                A tool for automatically validating and processing complex data
              </li>
              <li>
                A platform for female artists to showcase their work and connect
                with companies for collaboration.
              </li>
            </ul>
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/hougesen"
            aria-label="Link to my Github"
            rel="noreferrer noopener"
            target="_blank"
            className="social-link"
          >
            {/* Github icon */}
          </a>

          <a
            href="https://www.linkedin.com/in/mads-hougesen-78733016a/"
            aria-label="Link to my LinkedIn"
            rel="noreferrer noopener"
            target="_blank"
            className="social-link"
          >
            {/* LinkedIn icon */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

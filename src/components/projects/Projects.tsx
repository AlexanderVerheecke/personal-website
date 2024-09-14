import { SquareArrowOutUpRight } from "lucide-react";
import { useColor } from "../../ColorContext";
import { getColorForLanguage } from "../../utils/ColorUtils";

import "./Projects.scss";

const ProjectCard = ({
  title,
  description,
  link,
  languages,
}: {
  title: string;
  description: string;
  link?: string;
  languages?: string[];
}) => {
  const { currentColor } = useColor();

  return (
    <div className="project-card">
      {link ? (
        <a href={link} className="link">
          <div className="project-text">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
          </div>

          <div className="language-tags">
            {languages?.map((language, index) => (
              <span
                key={index}
                className="language-tag"
                style={{ backgroundColor: getColorForLanguage(language) }}
              >
                {language}
              </span>
            ))}
          </div>
          <div className="link-icon">
            <SquareArrowOutUpRight color={currentColor} />
          </div>
        </a>
      ) : (
        <>
          <div className="project-text">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
          </div>
          <div className="language-tags">
            {languages?.map((language, index) => (
              <span
                key={index}
                className="language-tag"
                style={{ backgroundColor: getColorForLanguage(language) }}
              >
                {language}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
const Projects = () => {
  const projects = [
    {
      title: "Bali Villa Marene",
      description:
        "A static e-commerce website for a private rental business in Indonesia",
      link: "https://balivillamarene.com/home",
      languages: ["TypeScript", "Angular", "SupaBase", "Netlify"],
    },
    {
      title: "Media Tracking Application",
      description:
        "An upcoming web application to keep track of your Books, TV Series, Movies, and Games",
      languages: ["TypeScript", "React", "SupaBase", "Netlify"],
    },
    {
      title: "Old Personal Website",
      description:
        "A previous version of my website before gaining developer experience",
      languages: ["JavaScript", "HTML", "CSS"],
      link: "/old-website",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import "./SkillTree.scss";

interface Skill {
  category: string;
  skills: string[];
}

const SkillTree: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const skillCategories: Skill[] = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Angular"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "SupaBase"],
    },
    {
      category: "Hosting",
      skills: ["Heroku", "Netlify"],
    },
    {
      category: "Version Control",
      skills: ["Git"],
    },
    {
      category: "Cloud Computing",
      skills: ["AWS"],
    },
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev: string[]) =>
      prev.includes(category)
        ? prev.filter((cat: string) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      <div className="tree">
        {skillCategories.map((category, index) => (
          <div key={index} className="branch">
            <div
              className={`category ${
                expandedCategories.includes(category.category) ? "expanded" : ""
              }`}
              onClick={() => toggleCategory(category.category)}
            >
              {category.category}
            </div>
            {expandedCategories.includes(category.category) && (
              <div className="skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill">
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;

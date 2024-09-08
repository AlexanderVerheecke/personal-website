import "./SkillConstellation.scss";

const SkillConstellation = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: 0.9 },
        { name: "TypeScript", level: 0.8 },
        { name: "Python", level: 0.7 },
        { name: "Java", level: 0.6 },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "React", level: 0.9 },
        { name: "Angular", level: 0.7 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 0.8 },
        { name: "PostgreSQL", level: 0.7 },
        { name: "SupaBase", level: 0.6 },
      ],
    },
    {
      category: "Hosting",
      skills: [
        { name: "Heroku", level: 0.7 },
        { name: "Netlify", level: 0.8 },
      ],
    },
    {
      category: "Version Control",
      skills: [{ name: "Git", level: 0.9 }],
    },
    {
      category: "Cloud Computing",
      skills: [{ name: "AWS", level: 0.7 }],
    },
  ];

  const getRandomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
  });

  return (
    <div className="constellation-container">
      <h2 className="constellation-title">Skill Constellation</h2>
      <div className="night-sky">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="constellation">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="star"
                style={{
                  ...getRandomPosition(),
                  width: `${skill.level * 20 + 5}px`,
                  height: `${skill.level * 20 + 5}px`,
                }}
              >
                <span className="star-name">{skill.name}</span>
              </div>
            ))}
            <div className="constellation-name" style={getRandomPosition()}>
              {category.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillConstellation;

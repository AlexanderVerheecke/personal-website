import React, { useState, useRef, useEffect, useCallback } from "react";
import { useColor } from "../../ColorContext";
import "./Skills.scss";

const Skills = () => {
  const { currentColor } = useColor();
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    { category: "Frameworks", skills: ["React", "Angular", "Django"] },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "SupaBase"] },
    { category: "Hosting", skills: ["Heroku", "Netlify"] },
    { category: "Versioning", skills: ["Git"] },
    { category: "Cloud", skills: ["AWS"] },
  ];

  const boardRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );
  const [hasRendered, setHasRendered] = useState(false);

  const [chipSize, setChipSize] = useState(150);
  const [margin, setMargin] = useState(30);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const chipToBorderMinDistance = 10;

  // Function to update chip size and margin based on screen width
  const updateChipSize = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      setMargin(10);
      setIsSmallScreen(true);
    } else if (screenWidth <= 768) {
      setMargin(15);
      setIsSmallScreen(true);
    } else {
      setChipSize(150);
      setMargin(30);
      setIsSmallScreen(false);
    }
  }, []);

  useEffect(() => {
    updateChipSize();
    window.addEventListener("resize", updateChipSize);
    return () => window.removeEventListener("resize", updateChipSize);
  }, [updateChipSize]);

  // Random positioning for skill chips
  const getRandomPosition = (
    boardWidth: number,
    boardHeight: number,
    chipWidth: number,
    chipHeight: number
  ) => {
    return {
      top: `${
        Math.random() *
          (boardHeight - chipHeight - chipToBorderMinDistance * 2) +
        chipToBorderMinDistance
      }px`,
      left: `${
        Math.random() * (boardWidth - chipWidth - chipToBorderMinDistance * 2) +
        chipToBorderMinDistance
      }px`,
    };
  };

  // Function to calculate positions for skill chips (only for non-small screens)
  const calculatePositions = useCallback(() => {
    if (boardRef.current && !isSmallScreen) {
      const boardRect = boardRef.current.getBoundingClientRect();
      const chips = Array.from(
        boardRef.current.querySelectorAll(".skill-chip")
      ) as HTMLDivElement[];
      const newPositions: { top: string; left: string }[] = [];

      chips.forEach((chip) => {
        const chipRect = chip.getBoundingClientRect();
        let position: any;
        let attempts = 0;
        const maxAttempts = 3500;

        do {
          position = getRandomPosition(
            boardRect.width,
            boardRect.height,
            chipRect.width,
            chipRect.height
          );
          const overlaps = newPositions.some((pos, idx) => {
            const existingChip = chips[idx];
            const existingChipRect = existingChip.getBoundingClientRect();
            const distance = Math.sqrt(
              Math.pow(parseFloat(position.left) - parseFloat(pos.left), 2) +
                Math.pow(parseFloat(position.top) - parseFloat(pos.top), 2)
            );
            return (
              distance < (chipRect.width + existingChipRect.width) / 2 + margin
            );
          });

          attempts++;
          if (!overlaps || attempts >= maxAttempts) {
            newPositions.push(position);
            break;
          }
        } while (attempts < maxAttempts);

        if (attempts >= maxAttempts) {
          console.warn(
            `Could not find non-overlapping position after ${maxAttempts} attempts`
          );
        }
      });

      setPositions(newPositions);
    }
  }, [isSmallScreen, margin]);

  // Debounce utility function
  const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Debounced calculatePositions
  const debouncedCalculatePositions = useCallback(
    debounce(() => {
      if (!isSmallScreen) calculatePositions();
    }, 50),
    [calculatePositions, isSmallScreen]
  );

  // Run calculatePositions on render and dependency change
  useEffect(() => {
    if (!isSmallScreen) {
      debouncedCalculatePositions();
      setHasRendered(true);
    }
  }, [debouncedCalculatePositions, chipSize, isSmallScreen]);

  // Handle window resize, only when screen is not small
  useEffect(() => {
    if (!isSmallScreen) {
      window.addEventListener("resize", debouncedCalculatePositions);
      return () =>
        window.removeEventListener("resize", debouncedCalculatePositions);
    }
  }, [isSmallScreen, debouncedCalculatePositions]);

  // Utility to convert hex color to rgb
  const hexToRgb = (hex: string) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `${r}, ${g}, ${b}`;
  };

  return (
    <div className="circuit-board-container">
      <h2 className="section-title">Skills</h2>
      <div
        className={`circuit-board ${isSmallScreen ? "small-screen" : ""}`}
        ref={boardRef}
        style={{ color: currentColor }}
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-chip"
            style={{
              position: isSmallScreen ? "relative" : "absolute",
              top: !isSmallScreen ? positions[index]?.top || "0px" : "auto",
              left: !isSmallScreen ? positions[index]?.left || "0px" : "auto",
              width: isSmallScreen ? `${chipSize}px` : "max-content",
              boxShadow: `0 0 10px rgba(${hexToRgb(currentColor)}, 0.5)`,
              margin: isSmallScreen ? `${margin / 2}px` : 0,
            }}
          >
            <h3 className="skill-chip-title">{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// ColorContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ColorContextType {
  currentColor: string;
  setColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentColor, setColor] = useState<string>("#DC143C");

  return (
    <ColorContext.Provider value={{ currentColor, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

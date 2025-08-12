import { createContext, useContext, useState } from "react";

const BlurContext = createContext();

export const useBlur = () => useContext(BlurContext);

export const BlurProvider = ({ children }) => {
  const [isBlur, setIsBlur] = useState(false);

  return (
    <BlurContext.Provider value={{ isBlur, setIsBlur }}>
      {children}
    </BlurContext.Provider>
  );
};

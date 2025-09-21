import { useState } from "react";
import { AppContext } from "./index";
import { useMediaQuery } from "@mui/material";

export const AppProvider = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(!isMobile);

  const toggleInfoPanel = () => {
    setIsInfoPanelOpen(!isInfoPanelOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isMobile, // can be taken from mui as well on each page
        isDarkMode,
        setIsDarkMode,
        isInfoPanelOpen,
        toggleInfoPanel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { useContext } from "react";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {
  FavIcon,
  LeftPanelView,
  ThemeIcon,
  RecentIcon,
  NotificationIcon,
  SearchIconImg,
  FavIconDark,
  LeftPanelViewDark,
  ThemeIconDark,
  RecentIconDark,
  NotificationIconDark,
  SearchIconImgDark,
} from "./icons";
import BreadCrumbs from "./BreadCrumbs";
import { AppContext } from "../../context";

function Navbar() {
  const { isDarkMode, setIsDarkMode, toggleInfoPanel } = useContext(AppContext);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNotificationClick = () => {
    toggleInfoPanel();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          borderBottom: `1px solid ${isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A"}`,
          padding: { xs: "18px 16px", md: "18px 25px" },
          backgroundColor: isDarkMode ? "#1C1C1C" : "white",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
          gap: { xs: "15px", md: "16px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "6px", md: "16px" },
            transition: "gap 0.3s ease",
          }}
        >
          <Box
            component="img"
            src={isDarkMode ? LeftPanelViewDark : LeftPanelView}
            alt="sidebar"
            className="navbar-left-toggle"
            sx={{
              width: "17px",
              height: "17px",
              cursor: "pointer",
              transition: "transform 0.2s ease, filter 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                filter: isDarkMode ? "brightness(1.3)" : "brightness(0.7)",
              },
            }}
          />
          <Box>
            <Tooltip title="Favorites" arrow>
              <Box
                component="img"
                src={isDarkMode ? FavIconDark : FavIcon}
                alt="fav"
                className="navbar-fav"
                sx={{
                  width: "17px",
                  height: "17px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    filter: isDarkMode ? "brightness(1.3)" : "brightness(0.7)",
                  },
                }}
              />
            </Tooltip>
          </Box>

          <BreadCrumbs isDarkMode={isDarkMode} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "20px", md: "16px" },
            transition: "gap 0.3s ease",
          }}
        >
          <Box
            className="navbar-search-bar"
            sx={{
              position: "relative",
              "&:hover .search-input": {
                borderColor: isDarkMode ? "#FFFFFF66" : "#1470ec",
              },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box
              component="img"
              src={isDarkMode ? SearchIconImgDark : SearchIconImg}
              alt="search"
              sx={{
                width: "17px",
                height: "17px",
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
            <Box
              component="input"
              type="text"
              placeholder="Search"
              className="search-input"
              sx={{
                padding: "8px 30px",
                border: "1px solid transparent",
                borderRadius: "8px",
                outline: "none",
                transition:
                  "border-color 0.3s ease, background-color 0.3s ease",
                backgroundColor: isDarkMode ? "#FFFFFF1A" : "#1C1C1C0D",
                "&::placeholder": {
                  color: isDarkMode ? "#FFFFFF33" : "#1C1C1C33",
                  opacity: 1,
                  transition: "color 0.3s ease",
                },
                "&:focus": {
                  border: `1px solid ${isDarkMode ? "#FFFFFF66" : "#1470ec"}`,
                  backgroundColor: isDarkMode ? "#FFFFFF33" : "#e0f0ff",
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: isDarkMode ? "#FFFFFF33" : "#1C1C1C33",
                fontSize: "0.875rem",
              }}
            >
              ⌘ /
            </Box>
          </Box>
          <Tooltip title="Switch Theme" arrow>
            <Box
              component="img"
              onClick={handleDarkMode}
              src={isDarkMode ? ThemeIconDark : ThemeIcon}
              alt="theme"
              className="navbar-dark-mode"
              sx={{
                width: "17px",
                height: "17px",
                cursor: "pointer",
                transition: "transform 0.2s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: isDarkMode ? "brightness(1.3)" : "brightness(0.7)",
                },
              }}
            />
          </Tooltip>
          <Tooltip title="Recent Activities" arrow>
            <Box
              component="img"
              src={isDarkMode ? RecentIconDark : RecentIcon}
              alt="recent"
              className="navbar-notification"
              sx={{
                width: "17px",
                height: "17px",
                cursor: "pointer",
                transition: "transform 0.2s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: isDarkMode ? "brightness(1.3)" : "brightness(0.7)",
                },
              }}
            />
          </Tooltip>
          <Tooltip title="Notifications" arrow>
            <Box
              component="img"
              src={isDarkMode ? NotificationIconDark : NotificationIcon}
              alt="notifications"
              onClick={handleNotificationClick}
              sx={{
                width: "17px",
                height: "17px",
                cursor: "pointer",
                transition: "transform 0.2s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: isDarkMode ? "brightness(1.3)" : "brightness(0.7)",
                },
              }}
            />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;

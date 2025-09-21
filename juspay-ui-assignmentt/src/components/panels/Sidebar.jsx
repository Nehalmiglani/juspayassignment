import { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SIDEBAR_DATA, ICON_MAP } from "../../data/sidebarData";
import { AppContext } from "../../context";
import ProfileImage from "../../assets/images/left-panel/profile-image.svg";
import DropArrow from "../../assets/images/left-panel/dropArrow.svg";
import DropArrowDark from "../../assets/images/left-panel/arrow-dark.svg";

export const Sidebar = () => {
  const { isDarkMode } = useContext(AppContext);
  const [openDropdown, setOpenDropdown] = useState("userProfile");

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const renderSectionTitle = (title, key) => (
    <Typography
      key={key}
      sx={{
        fontWeight: 500,
        color: isDarkMode ? "#FFFFFF" : "#1C1C1C66",
        mt: "15px",
        mb: "12px",
        fontSize: "0.875rem",
      }}
    >
      {title}
    </Typography>
  );

  const renderSimpleItem = (item, sectionId, itemIndex) => {
    const iconSrc = ICON_MAP[item.icon] ? ICON_MAP[item.icon][isDarkMode ? 'dark' : 'light'] : null;

    return (
      <Box
        key={`${sectionId}-${itemIndex}`}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          py: "7px",
          pr: "12px",
          color: isDarkMode ? "#FFFFFF" : "black",
          fontSize: "0.875rem",
          borderRadius: "5px",
          transition: "background-color 0.2s",
          mb: "2px",
          textDecoration: "none",
        }}
      >
        {iconSrc ? (
          <Box
            component="img"
            src={iconSrc}
            alt={item.label}
            sx={{ width: "17px", height: "17px" }}
          />
        ) : (
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: item.bulletColor || "#94a3b8",
              borderRadius: "50%",
            }}
          />
        )}
        {item.label}
      </Box>
    );
  };

  const renderNavItem = (item, sectionId, itemIndex) => {
    const iconSrc = ICON_MAP[item.icon] ? ICON_MAP[item.icon][isDarkMode ? 'dark' : 'light'] : null;

    return (
      <Box
        key={`${sectionId}-${itemIndex}`}
        component={RouterLink}
        to={item.path}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          py: "7px",
          pr: "12px",
          color: isDarkMode ? "#FFFFFF" : "black",
          backgroundColor: item.selected
            ? isDarkMode
              ? "#FFFFFF1A"
              : "#1C1C1C0D"
            : "transparent",
          cursor: "pointer",
          fontSize: "0.875rem",
          borderRadius: "5px",
          transition: "background-color 0.2s",
          mb: "2px",
          textDecoration: "none",
          "&:hover": { backgroundColor: isDarkMode ? "#FFFFFF1A" : "#1C1C1C0D" },
        }}
      >
        <Box
          sx={{
            fontSize: "0.625rem",
            color: "#94a3b8",
            ml: 0,
            mr: "13px",
            maxWidth: "fit-content",
            borderRadius: "20px",
            height: "16px",
            borderLeft: item.selected
              ? `4px solid ${isDarkMode ? "#C6C7F8" : "black"}`
              : "none",
          }}
        />
        {iconSrc && (
          <Box
            component="img"
            src={iconSrc}
            alt={item.label}
            sx={{ width: "17px", height: "17px" }}
          />
        )}
        {item.label}
      </Box>
    );
  };

  const renderDropdownSection = (section) => {
    const iconSrc = ICON_MAP[section.icon] ? ICON_MAP[section.icon][isDarkMode ? 'dark' : 'light'] : null;

    return (
      <Box key={section.id}>
        <Box
          onClick={() => handleDropdownToggle(section.dropdownId)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            py: "7px",
            pr: "12px",
            color: isDarkMode ? "#FFFFFF" : "black",
            fontSize: "0.875rem",
            borderRadius: "5px",
            transition: "background-color 0.2s",
            mb: "2px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: isDarkMode ? "#FFFFFF1A" : "#1C1C1C0D",
            },
          }}
        >
          <Box
            component="img"
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
            sx={{
              width: "17px",
              height: "17px",
              transform:
                openDropdown === section.dropdownId
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
          {iconSrc && (
            <Box
              component="img"
              src={iconSrc}
              alt={section.title}
              sx={{ width: "17px", height: "17px" }}
            />
          )}
          <span>{section.title}</span>
        </Box>

        {openDropdown === section.dropdownId && (
          <Box sx={{ ml: "30px" }}>
            {section.items.map((item, itemIndex) => {
              const itemIconSrc = ICON_MAP[item.icon] ? ICON_MAP[item.icon][isDarkMode ? 'dark' : 'light'] : null;

              return (
                <Box
                  key={itemIndex}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    py: "7px",
                    pr: "12px",
                    color: isDarkMode ? "#FFFFFF" : "black",
                    fontSize: "0.875rem",
                    borderRadius: "5px",
                    transition: "background-color 0.2s",
                    mb: "2px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#FFFFFF1A" : "#1C1C1C0D",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={isDarkMode ? DropArrowDark : DropArrow}
                    alt="Drop Arrow"
                    sx={{ width: "17px", height: "17px" }}
                  />
                  {itemIconSrc && (
                    <Box
                      component="img"
                      src={itemIconSrc}
                      alt={item.label}
                      sx={{ width: "17px", height: "17px" }}
                    />
                  )}
                  <span>{item.label}</span>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box
      component="aside"
      sx={{
        maxWidth: "212px",
        width: "100%",
        height: "100dvh",
        px: "20px",
        py: "16px",
        borderRight: `1px solid ${isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A"}`,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        background: isDarkMode ? "#1C1C1C" : "white",
      }}
    >
      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: "20px",
          fontSize: "14px",
          fontWeight: 400,
          textAlign: "left",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
          <Box
            component="img"
            src={ProfileImage}
            alt="Profile"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              mr: "8px",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: isDarkMode ? "#FFFFFF" : "#1f2937",
            }}
          >
            ByeWind
          </Typography>
        </Box>
      </Box>

      {/* Navigation Sections */}
      <Box sx={{ flex: 1 }}>
        {/* Header Section with Favorites/Recently */}
        {SIDEBAR_DATA.map((section) => {
          if (section.type === 'header') {
            return (
              <Box
                key={section.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",
                  mb: "20px"
                }}
              >
                {section.items.map((item, itemIndex) => (
                  <Typography
                    key={item.id}
                    component="div"
                    sx={{
                      fontWeight: 500,
                      color: isDarkMode ? "#FFFFFF" : "#1C1C1C66",
                      fontSize: "0.875rem",
                      opacity: itemIndex === 0 ? (isDarkMode ? 0.5 : 1) : 0.5,
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            );
          }
          return null;
        })}

        {/* Main Content Sections */}
        {SIDEBAR_DATA.map((section) => {
          if (section.type === "section") {
            return (
              <Box key={section.id}>
                {section.title && renderSectionTitle(section.title, section.id)}
                {section.items.map((item, itemIndex) => {
                  if (item.type === "simple") {
                    return renderSimpleItem(item, section.id, itemIndex);
                  } else if (item.type === "nav") {
                    return renderNavItem(item, section.id, itemIndex);
                  }
                  return null;
                })}
              </Box>
            );
          } else if (section.type === "dropdown") {
            return renderDropdownSection(section);
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

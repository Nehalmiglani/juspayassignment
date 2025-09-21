import { Box, Typography, IconButton } from "@mui/material";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import BugIcon from "../../assets/images/right-panel/bug.svg";
import UserIcon from "../../assets/images/right-panel/User.svg";
import Broadcast from "../../assets/images/right-panel/Broadcast.svg";
import Person1 from "../../assets/images/right-panel/person1.svg";
import Person2 from "../../assets/images/right-panel/person2.svg";
import Person3 from "../../assets/images/right-panel/person3.svg";
import Person4 from "../../assets/images/right-panel/person4.svg";
import { AppContext } from "../../context/index";

export const InfoPanel = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <Box
      component="aside"
      sx={{
        maxWidth: "280px",
        backgroundColor: isDarkMode ? "#1C1C1C" : "white",
        padding: "20px",
        borderLeft: `1px solid ${isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A"}`,
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ mb: "20px" }}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? "#FFFFFF" : "#1C1C1C66",
            mt: "15px",
            mb: "10px",
            fontSize: "0.875rem",
          }}
        >
          Notifications
        </Typography>
        {[
          {
            icon: BugIcon,
            text: "You have a bug that needs...",
            time: "Just now",
          },
          {
            icon: UserIcon,
            text: "New user registered",
            time: "59 minutes ago",
          },
          {
            icon: BugIcon,
            text: "You have a bug that needs...",
            time: "12 hours ago",
          },
          {
            icon: Broadcast,
            text: "Andi Lane subscribed to you",
            time: "Today, 11:59 AM",
          },
        ].map((n, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "12px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "#e3f5ff",
                borderRadius: "8px",
                p: "4px",
                mr: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={n.icon}
                alt="icon"
                sx={{ width: "17px", height: "17px" }}
              />
            </Box>
            <Box
              sx={{
                fontSize: "0.875rem",
                color: isDarkMode ? "#FFFFFF" : "black",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {n.text}
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontSize: "0.6875rem",
                  color: isDarkMode ? "#FFFFFF66" : "#6b7280",
                  mt: "2px",
                }}
              >
                {n.time}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Activities Section */}
      <Box sx={{ mb: "20px" }}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? "#FFFFFF" : "#1C1C1C66",
            mt: "15px",
            mb: "10px",
            fontSize: "0.875rem",
          }}
        >
          Activities
        </Typography>
        {[
          {
            img: Person1,
            text: "You have a bug that needs...",
            time: "Just now",
          },
          {
            img: Person2,
            text: "Released a new version",
            time: "59 minutes ago",
          },
          { img: Person3, text: "Submitted a bug", time: "12 hours ago" },
          {
            img: Person1,
            text: "Modified A data in Page X",
            time: "Today, 11:59 AM",
          },
          {
            img: Person4,
            text: "Deleted a page in Project X",
            time: "Feb 2, 2023",
          },
        ].map((a, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: "12px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mr: "10px",
              }}
            >
              <Box
                component="img"
                src={a.img}
                alt="person"
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  mr: "10px",
                }}
              />
              {idx < 3 && (
                <Box
                  sx={{
                    width: "1px",
                    backgroundColor: isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A",
                    flexGrow: 1,
                    position: "absolute",
                    top: "27px",
                    bottom: "-20px",
                    left: "9px",
                  }}
                />
              )}
            </Box>
            <Box
              sx={{
                fontSize: "0.875rem",
                color: isDarkMode ? "#FFFFFF" : "black",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                mt: 0,
              }}
            >
              {a.text}
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontSize: "0.6875rem",
                  color: isDarkMode ? "#FFFFFF66" : "#6b7280",
                  mt: "2px",
                }}
              >
                {a.time}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Contacts Section */}
      <Box>
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? "#FFFFFF" : "#1C1C1C66",
            mt: "15px",
            mb: "10px",
            fontSize: "0.875rem",
          }}
        >
          Contacts
        </Typography>
        {[
          { img: Person1, name: "Natal Craig" },
          { img: Person2, name: "Drew Cano" },
          { img: Person3, name: "Orlando Diggs" },
          { img: Person4, name: "Andi Lane" },
          { img: Person2, name: "Kate Morrison" },
          { img: Person1, name: "Koray Okumus" },
        ].map((c, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "13px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={c.img}
              alt="person"
              sx={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                mr: "10px",
              }}
            />
            <Typography
              component="div"
              sx={{
                fontSize: "0.875rem",
                color: isDarkMode ? "#FFFFFF" : "black",
              }}
            >
              {c.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

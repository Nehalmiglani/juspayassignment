import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as MuiLink, Typography } from "@mui/material";

const BreadCrumbs = ({ isDarkMode, separator = "/" }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <MuiLink
        component={RouterLink}
        to="/"
        underline="hover"
        sx={{
          fontSize: "0.875rem", 
          fontWeight: 400,
          cursor: "pointer",
          opacity: 0.8,
          color: isDarkMode ? "#FFFFFF66" : "black",
          transition: "color 0.3s ease",
          "&:hover": {
            color: isDarkMode ? "#FFFFFFCC" : "#1470ec",
          },
        }}
      >
        Dashboards
      </MuiLink>
      {pathName.length > 0 && (
        <Typography
          component="span"
          sx={{
            fontSize: "0.875rem", 
            fontWeight: 400,
            opacity: 0.8,
            color: isDarkMode ? "#FFFFFF66" : "black",
            transition: "color 0.3s ease",
          }}
        >
          {separator}
        </Typography>
      )}
      {pathName.map((name, index) => {
        const routeTo = `/${pathName.slice(0, index + 1).join("/")}`;
        const isLast = index === pathName.length - 1;

        const capitalizeFirstLetter = (word) =>
          word.charAt(0).toUpperCase() + word.slice(1);

        return !isLast ? (
          <MuiLink
            key={routeTo}
            component={RouterLink}
            to={routeTo}
            underline="hover"
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              cursor: "pointer",
              color: isDarkMode ? "#FFFFFF" : "black",
              transition: "color 0.3s ease",
              "&:hover": {
                color: isDarkMode ? "#FFFFFFCC" : "#1470ec",
              },
            }}
          >
            {capitalizeFirstLetter(name)}
          </MuiLink>
        ) : (
          <Typography
            key={routeTo}
            component="span"
            sx={{
              fontSize: "0.875rem", 
              fontWeight: 400,
              color: isDarkMode ? "#FFFFFF" : "black",
              transition: "color 0.3s ease",
            }}
          >
            {capitalizeFirstLetter(name)}
          </Typography>
        );
      })}
    </>
  );
};

export default BreadCrumbs;

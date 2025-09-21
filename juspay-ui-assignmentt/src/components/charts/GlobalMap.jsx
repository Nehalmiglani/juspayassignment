import WorldMapIcon from "../../assets/images/graphs/global-map/world-map.svg";
import { Box, Typography } from "@mui/material";
import { countryData } from "../../data/chartsData";

const GlobalMap = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        p: "1.5rem",
        borderRadius: "1rem",
        backgroundColor: isDarkMode ? "#FFFFFF0D" : "#F7F9FB",
        transition:
          "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          backgroundColor: isDarkMode ? "#FFFFFF1A" : "#F0F3F5",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(255, 255, 255, 0.2)"
            : "0 4px 20px rgba(0, 0, 0, 0.15)",
        },
        width: { xs: "87%" , md:'100%'},
      }}
    >
      <Typography
        component="div"
        sx={{
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: "1.25rem",
          color: isDarkMode ? "#FFFFFF" : "black",
        }}
      >
        Revenue by Location
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={WorldMapIcon}
          alt="world-map"
          sx={{ m: "10px" }}
        />
      </Box>
      {countryData.map((country) => (
        <Box
          key={country.name}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            m: "0.4375rem 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: "0.75rem",
                color: isDarkMode ? "#FFFFFF" : "inherit",
              }}
            >
              {country.name}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "0.75rem",
                color: isDarkMode ? "#FFFFFF" : "#333",
              }}
            >{`${country.percentage}k`}</Box>
          </Box>
          <Box
            sx={{
              height: "0.1875rem",
              backgroundColor: isDarkMode ? "#1C1C1C66" : "#e0e0e0",
              borderRadius: "0.3125rem",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
                backgroundColor: "#a8c5da",
                width: `${country.percentage}%`,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GlobalMap;

import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ProjectionsVsActualsChart from "../charts/BarChart";
import Cards from "../cards/Cards";
import GlobalMap from "../charts/GlobalMap";
import RevenueChart from "../charts/RevenueChart";
import TopSellingProductsTable from "../charts/TopSellingProducts";
import { AppContext } from "../../context/index";
import PieSalesChart from "../charts/PieChart";

export const Home = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        maxHeight: "88dvh",
        p: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        overflowY: "scroll",
        backgroundColor: isDarkMode ? "#1C1C1C" : "white",
        scrollbarWidth: "thin",
        scrollbarColor: "gray #f0f0f0",
      }}
    >
      <Typography
        component="h4"
        sx={{
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: "1.25rem",
          color: isDarkMode ? "#FFFFFF" : "black",
        }}
      >
        eCommerce
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection:{md:'row', xs:'column'},
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Cards isDarkMode={isDarkMode} />
        <Box
          sx={{
            borderRadius: "16px",
            color: "#1c1c1c",
            fontWeight: 400,
            backgroundColor: isDarkMode ? "#FFFFFF0D" : "#F7F9FB",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            transition:
              "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease",
            overflow: "hidden",
            position: "relative",
            "&:hover": {
              transform: "translateY(-8px) scale(1.05) rotate(1deg)",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
              background: isDarkMode
                ? "linear-gradient(135deg, #444444, #333333)"
                : "linear-gradient(135deg, #E5ECF6, #F0F4FA)",
            },
            "&:before": {
              content: "''",
              position: "absolute",
              top: 0,
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)",
              transition: "transform 0.5s ease",
              transform: "scale(1)",
            },
            "&:hover:before": {
              transform: "scale(1.2)",
            },
            "&:after": {
              content: "''",
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "60px",
              height: "60px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              transition: "opacity 0.5s ease",
              opacity: 0,
            },
            "&:hover:after": { opacity: 0.8 },
          }}
        >
          <Typography
            component="h4"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: "1.25rem",
              color: isDarkMode ? "#FFFFFF" : "black",
              pt: "16px",
              pl: "20px",
            }}
          >
            Projections vs Actuals
          </Typography>
          <ProjectionsVsActualsChart isDarkMode={isDarkMode} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection:{md:'row', xs:'column'},
          alignItems: "center",
          gap: "20px",
          width: "100%"
        }}
      >
        <Box
          sx={{
            position: "relative",
            p: "24px",
            borderRadius: "16px",
            width: "100%",
            overflow: "hidden",
            transition: "box-shadow 0.3s ease, background-color 0.3s ease",
            backgroundColor: isDarkMode ? "#2E2E2E" : "#FFFFFF",
            "&:hover": {
              backgroundColor: isDarkMode ? "#2E2E2E" : "#FFFFFF",
              boxShadow: isDarkMode
                ? "0 8px 30px rgba(255, 255, 255, 0.2)"
                : "0 8px 30px rgba(0, 0, 0, 0.15)",
            },
            "&:before": {
              content: "''",
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 60%)",
              opacity: 0,
              transition: "opacity 0.4s ease, transform 0.5s ease",
              pointerEvents: "none",
            },
          }}
        >
          <RevenueChart isDarkMode={isDarkMode}/>
        </Box>
        <GlobalMap isDarkMode={isDarkMode} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TopSellingProductsTable isDarkMode={isDarkMode} />
        <PieSalesChart isDarkMode={isDarkMode} />
      </Box>
    </Box>
  );
};

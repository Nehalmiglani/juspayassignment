import { Box, Typography } from "@mui/material";
import { Tableproducts } from "../../data/chartsData";

const TopSellingProducts = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#FFFFFF0D" : "#F7F9FB",
        borderRadius: "0.75rem",
        p: "1.5rem",
        width: { xs: "85%", md: "100%" },
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(255, 255, 255, 0.2)"
            : "0 4px 20px rgba(0, 0, 0, 0.15)",
        }
      }}
    >
      <Typography component="h2" sx={{ fontSize: "0.875rem", fontWeight: 700, color: isDarkMode ? "#FFFFFF" : "black", mb: "1rem" }}>
        Top Selling Products
      </Typography>

      <Box component="table" sx={{ width: "100%", borderCollapse: "collapse" }}>
        <Box component="thead">
          <Box component="tr">
            {['Name','Price','Quantity','Amount'].map((h) => (
              <Box
                key={h}
                component="th"
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: isDarkMode ? "#FFFFFF66" : "#1C1C1C66",
                  textAlign: "left",
                  pb: "0.75rem",
                  borderBottom: `1px solid ${isDarkMode ? "#FFFFFF1A" : "#e5e7eb"}`,
                }}
              >
                {h}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {Tableproducts.map((product, index) => (
            <Box component="tr" key={index}>
              {[product.name, product.price, product.quantity, product.amount].map((val, i) => (
                <Box
                  key={`${index}-${i}`}
                  component="td"
                  sx={{
                    fontSize: "0.75rem",
                    color: isDarkMode ? "#FFFFFF" : "#1C1C1C",
                    py: "0.75rem",
                  }}
                >
                  {val}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
 };

 export default TopSellingProducts;

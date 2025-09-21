import { Box, Typography } from "@mui/material";
import { cardData } from "../../data/chartsData";

const Cards = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "repeat(2, 1fr)", xs: "1fr" },
        gap: "16px",
        width: "100%",
      }}
    >
      {cardData.map((card, index) => {
        const bg = (() => {
          if (
            isDarkMode &&
            (card.type === "orders" || card.type === "revenue")
          ) {
            return "#FFFFFF0D";
          }
          switch (card.type) {
            case "customer":
              return "#E3F5FF";
            case "orders":
              return "#F7F9FB";
            case "revenue":
              return "#F7F9FB";
            case "growth":
              return "#E5ECF6";
            default:
              return "#E3F5FF";
          }
        })();

        const hoverBg = (() => {
          if (
            isDarkMode &&
            (card.type === "orders" || card.type === "revenue")
          ) {
            return "#FFFFFF1A";
          }
          switch (card.type) {
            case "customer":
              return "#D1EFFF";
            case "orders":
              return "#EFF3F7";
            case "revenue":
              return "#EFF3F7";
            case "growth":
              return "#D4E2F2";
            default:
              return "#D1EFFF";
          }
        })();

        const textColor = isDarkMode && card.isDarkMode ? "#FFFFFF" : "black";

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: { xs: "12px", md: "24px" },
              borderRadius: "16px",
              color: "#1c1c1c",
              fontWeight: 400,
              backgroundColor: bg,
              
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px) scale(1.03)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                backgroundColor: hoverBg,
              },
            }}
          >
            <Typography
              component="div"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.25rem",
                color: textColor,
              }}
            >
              {card.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: textColor,
                }}
              >
                {card.count}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: textColor,
                }}
              >
                {card.subCount}
                <Box
                  component="img"
                  src={
                    isDarkMode && card.isDarkMode ? card.darkIcon : card.icon
                  }
                  alt={card.type}
                  sx={{ width: "16px", height: "16px" }}
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Cards;

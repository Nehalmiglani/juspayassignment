import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";
import { PieChartdata } from "../../data/chartsData";

const COLORS = PieChartdata.map((entry) => entry.color);

const TooltipContainer = ({ children }) => (
  <Box sx={{ backgroundColor: "black", color: "white", p: "5px", borderRadius: "5px" }}>{children}</Box>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <Typography sx={{ m: 0 }}>{`${payload[0].value.toFixed(1)}%`}</Typography>
      </TooltipContainer>
    );
  }

  return null;
};

const PieSalesChart = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        height: "290px",
        backgroundColor: isDarkMode ? "#FFFFFF0D" : "#f5f5f5",
        borderRadius: "0.75rem",
        p: "1rem",
        textAlign: "center",
        width: { xs: "88%", md: "37%" },
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(255, 255, 255, 0.2)"
            : "0 4px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Typography component="h3" sx={{ fontSize: "0.875rem", fontWeight: 700, mb: "0.625rem", color: isDarkMode ? "#FFFFFF" : "#000" }}>
        Total Sales
      </Typography>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={PieChartdata}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            dataKey="value"
            paddingAngle={0}
          >
            {PieChartdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <Box sx={{ textAlign: "left", fontSize: "0.75rem" }}>
        {PieChartdata.map((entry, index) => (
          <Box key={`legend-${index}`} sx={{ display: "flex", alignItems: "center", mb: "8px" }}>
            <Box component="span" sx={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: entry.color, mr: "8px" }} />
            <Box component="span" sx={{ flex: 1, fontSize: "0.875rem", color: isDarkMode ? "#FFFFFF" : "#555" }}>{entry.name}</Box>
            <Box component="span" sx={{ fontSize: "0.875rem", color: isDarkMode ? "#FFFFFF" : "#333" }}>
              ${entry.value.toFixed(2)}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PieSalesChart;

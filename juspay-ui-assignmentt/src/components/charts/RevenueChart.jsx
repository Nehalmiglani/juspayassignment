import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LineChartdata } from "../../data/chartsData";

const RevenueChart = ({ isDarkMode }) => {
  console.log(isDarkMode, 'isDarkMode')
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={LineChartdata}
        margin={{ top: 20, right: 30, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke={isDarkMode ? "#FFFFFF1A" : "#E0E0E0"}
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tick={{
            fill: isDarkMode ? "#FFFFFF66" : "#1C1C1C66",
            dy: 12,
            fontSize: 12,
          }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => (value === 0 ? value : `${value}M`)}
          domain={[0, 30]}
          ticks={[0, 10, 20, 30]}
          tick={{
            fill: isDarkMode ? "#FFFFFF66" : "#1C1C1C66",
            dx: -12,
            fontSize: 12,
          }}
        />
        {/* <Tooltip content={<CustomTooltip isDarkMode={isDarkMode} />} /> */}

        <Line
          type="monotone"
          dataKey="currentWeek"
          stroke={isDarkMode ? "#A8C5DA" : "#000"}
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="previousWeek"
          stroke={isDarkMode ? "#C6C7F8" : "#8da4c9"}
          strokeWidth={3}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;

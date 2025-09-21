import RaiseIcon from "../assets/images/navbar/ArrowRise.svg";
import RaiseDown from "../assets/images/navbar/ArrowDown.svg";
import RaiseIconDark from "../assets/images/navbar/ArrowRise-dark.svg";
import RaiseDownDark from "../assets/images/navbar/ArrowDown-dark.svg";

export const BarChartdata = [
  { month: "Jan", projections: 25, actuals: 20 },
  { month: "Feb", projections: 28, actuals: 22 },
  { month: "Mar", projections: 25, actuals: 18 },
  { month: "Apr", projections: 30, actuals: 23 },
  { month: "May", projections: 18, actuals: 15 },
  { month: "Jun", projections: 24, actuals: 20 },
];

export const PieChartdata = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

export const LineChartdata = [
  { month: "Jan", currentWeek: 10, previousWeek: 15 },
  { month: "Feb", currentWeek: 12, previousWeek: 18 },
  { month: "Mar", currentWeek: 8, previousWeek: 10 },
  { month: "Apr", currentWeek: 20, previousWeek: 12 },
  { month: "May", currentWeek: 25, previousWeek: 18 },
  { month: "Jun", currentWeek: 28, previousWeek: 20 },
];

// Product data array
export const Tableproducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export const countryData = [
  { name: "New York", percentage: 70 },
  { name: "San Francisco", percentage: 50 },
  { name: "Sydney", percentage: 80 },
  { name: "India", percentage: 40 },
  { name: "Singapore", percentage: 60 },
];

export const cardData = [
  {
    type: "customer",
    title: "Customers",
    count: "3,781",
    subCount: "+11.01%",
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    isPositive: true,
    isDarkMode: false,
  },
  {
    type: "orders",
    title: "Orders",
    count: "1,219",
    subCount: "-0.03%",
    icon: RaiseDown,
    darkIcon: RaiseDownDark,
    isPositive: false,
    isDarkMode: true,
  },
  {
    type: "revenue",
    title: "Revenue",
    count: "$695",
    subCount: "+15.03%",
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    isPositive: true,
    isDarkMode: true,
  },
  {
    type: "growth",
    title: "Growth",
    count: "30.1%",
    subCount: "+6.08%",
    icon: RaiseIcon,
    darkIcon: RaiseIconDark,
    isPositive: true,
    isDarkMode: false,
  },
];

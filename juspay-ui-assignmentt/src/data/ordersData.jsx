import Person1 from "../assets/images/right-panel/person1.svg";
import Person2 from "../assets/images/right-panel/person2.svg";
import Person3 from "../assets/images/right-panel/person3.svg";
import Person4 from "../assets/images/right-panel/person4.svg";

export const initialData = [
  {
    id: "#CM9801",
    user: "Natal Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    icon: Person1,
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin page",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    icon: Person2,
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Complete",
    icon: Person3,
  },
  {
    id: "#CM9804",
    user: "Alex Smith",
    project: "E-commerce Site",
    address: "Market Street Boston",
    date: "2 hours ago",
    status: "In Progress",
    icon: Person4,
  },
];

export const columns = [
  { Header: "Order ID", accessor: "id" },
  { Header: "User", accessor: "user" },
  { Header: "Project", accessor: "project" },
  { Header: "Address", accessor: "address" },
  { Header: "Date", accessor: "date" },
  { Header: "Status", accessor: "status" },
];

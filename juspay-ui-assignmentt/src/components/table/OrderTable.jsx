import { useState, useMemo, useContext } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Paper,
  Modal,
  Button,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import Tooltip from "@mui/material/Tooltip";
import Person1 from "../../assets/images/right-panel/person1.svg";
import Person2 from "../../assets/images/right-panel/person2.svg";
import Person3 from "../../assets/images/right-panel/person3.svg";
import Person4 from "../../assets/images/right-panel/person4.svg";

import { initialData, columns } from "../../data/ordersData";
import { AppContext } from "../../context/index";
import { Add, MoreVert } from "@mui/icons-material";

const OrdersTable = () => {
  const [data, setData] = useState(initialData);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [newRow, setNewRow] = useState({
    id: "",
    user: "",
    project: "",
    address: "",
    date: "",
    status: "",
  });
  const [menuAnchor, setMenuAnchor] = useState(null);
  const { isDarkMode } = useContext(AppContext);

  const filteredData = useMemo(() => {
    return data.filter(
      (row) =>
        row.user.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.project.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [data, searchInput]);

  const columnDefs = useMemo(() => {
    return columns.map((col) => {
      const base = {
        id: col.accessor,
        accessorKey: col.accessor,
        header: col.Header,
      };
      if (col.accessor === "user") {
        return {
          ...base,
          cell: (info) => {
            const row = info.row.original;
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={row.icon}
                  alt="user icon"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                {info.getValue()}
              </Box>
            );
          },
        };
      }
      if (col.accessor === "status") {
        return {
          ...base,
          cell: (info) => {
            const row = info.row.original;
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: getStatusStyles(row.status).color,
                    marginRight: "8px",
                  }}
                />
                <span
                  style={{
                    color: getStatusStyles(row.status).color,
                    fontSize: 12,
                  }}
                >
                  {info.getValue()}
                </span>
              </Box>
            );
          },
        };
      }
      return {
        ...base,
        cell: (info) => info.getValue(),
      };
    });
  }, []);

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: filteredData,
    columns: columnDefs,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRow = () => {
    setData([...data, { ...newRow, icon: getIconForUser(newRow.user) }]);
    setNewRow({
      id: "",
      user: "",
      project: "",
      address: "",
      date: "",
      status: "",
    });
    handleCloseModal();
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const handleDelete = () => {
    setData(data.filter((row) => !selectedRows[row.id]));
    setSelectedRows({});
    handleMenuClose();
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "In Progress":
        return { color: "#8A8CD9" };
      case "Complete":
        return { color: "#4AA785" };
      case "Rejected":
        return { color: isDarkMode ? "#FFFFFF66" : "#1C1C1C66" };
      default:
        return { color: "black" };
    }
  };

  const getIconForUser = (userName) => {
    switch (userName) {
      case "Natal Craig":
        return Person1;
      case "Kate Morrison":
        return Person2;
      case "Drew Cano":
        return Person3;
      case "Alex Smith":
        return Person4;
      default:
        return Person1;
    }
  };

  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        p: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        overflowY: "scroll",
        maxHeight: "90vh",
        backgroundColor: isDarkMode ? "#1C1C1C" : "white",
        "&::-webkit-scrollbar": { width: "5px" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": {
          background: "gray",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
        scrollbarWidth: "thin",
        scrollbarColor: "gray #f0f0f0",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          color: isDarkMode ? "white" : "black",
        }}
      >
        Order list
      </Typography>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: isDarkMode ? "#1e1e1e" : "#FFFFFF",
          color: isDarkMode ? "white" : "black",
          overflowY: "auto",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#FFFFFF0D" : "#F7F9FB",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={handleOpenModal}
              sx={{ color: isDarkMode ? "white" : "black" }}
            >
              <Add sx={{ color: isDarkMode ? "white" : "black" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Tooltip
              title="Search orders..."
              arrow
              placement="top"
              sx={{
                "& .MuiTooltip-tooltip": {
                  backgroundColor: isDarkMode ? "#1C1C1C" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                  fontSize: "0.75rem",
                  border: `1px solid ${isDarkMode ? "#444" : "#ddd"}`,
                  padding: "4px 8px",
                  lineHeight: "1.2",
                  minHeight: "auto",
                },
                "& .MuiTooltip-arrow": {
                  color: isDarkMode ? "#1C1C1C" : "#fff",
                  "&:before": {
                    border: `1px solid ${isDarkMode ? "#444" : "#ddd"}`,
                  },
                },
              }}
            >
              <TextField
                placeholder="Search orders..."
                size="small"
                value={searchInput}
                onChange={handleSearchChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#2A2A2A" : "white",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    paddingRight: "8px",
                    paddingLeft: "8px",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#444" : "#ddd",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "#666" : "#bbb",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "#8A8CD9" : "#1976d2",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px 14px",
                    color: isDarkMode ? "white" : "black",
                    "&::placeholder": {
                      color: isDarkMode ? "#888" : "#999",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Tooltip>
            <IconButton
              onClick={handleMenuOpen}
              sx={{ color: isDarkMode ? "white" : "black" }}
            >
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </Box>
        </Toolbar>

        <TableContainer>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  <TableCell
                    padding="checkbox"
                    sx={{
                      borderBottom: isDarkMode
                        ? "1px solid #444"
                        : "1px solid #ddd",
                    }}
                  ></TableCell>
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      sx={{
                        color: isDarkMode ? "white" : "black",
                        fontWeight: "bold",
                        cursor: header.column.getCanSort()
                          ? "pointer"
                          : "default",
                        borderBottom: isDarkMode
                          ? "1px solid #444"
                          : "1px solid #ddd",
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === "asc"
                        ? " ▲"
                        : header.column.getIsSorted() === "desc"
                        ? " ▼"
                        : ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableBody>
              {table.getRowModel().rows.map((row) =>
                !row.original.hidden ? (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor: isDarkMode ? "transparent" : "#fff",

                      transition: "background-color 0.3s, transform 0.3s",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#444" : "#f5f5f5",
                        transform: "scale(1.001)",
                      },
                    }}
                  >
                    <TableCell
                      padding="checkbox"
                      sx={{
                        borderBottom: isDarkMode
                          ? "1px solid #444"
                          : "1px solid #ddd",
                      }}
                    >
                      <Checkbox
                        sx={{
                          color: isDarkMode ? "white" : "#1976d2",
                          "&.Mui-checked": {
                            color: isDarkMode ? "white" : "#1976d2",
                          },
                          "& .MuiSvgIcon-root": {
                            color: isDarkMode ? "white" : "#000",
                          },
                        }}
                        checked={selectedRows[row.original.id] || false}
                        onChange={() => handleCheckboxChange(row.original.id)}
                      />
                    </TableCell>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        sx={{
                          color: isDarkMode ? "white" : "black",
                          borderBottom: isDarkMode
                            ? "1px solid #444"
                            : "1px solid #ddd",
                          transition: "transform 0.3s",
                          "&:hover": { transform: "scale(1.01)" },
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ) : null
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Order
            </Typography>
            {Object.keys(newRow).map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                fullWidth
                margin="dense"
                name={field}
                value={newRow[field]}
                onChange={handleNewRowChange}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
              onClick={handleAddRow}
            >
              Add Order
            </Button>
          </Box>
        </Modal>
      </Paper>
    </Box>
  );
};

export default OrdersTable;

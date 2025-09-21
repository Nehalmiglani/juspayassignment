import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { AppProvider, AppContext } from "./context";
import { Home } from "./components/home/Home";
import OrdersTable from "./components/table/OrderTable";
import { Sidebar } from "./components/panels/Sidebar";
import { InfoPanel } from "./components/panels/InfoPanel";

// HOC for InfoPanel with modal/drawer functionality
const InfoPanelWithModal = ({ isOpen, onClose, isMobile }) => {
  const { isDarkMode } = useContext(AppContext);

  if (!isOpen) {
    return null;
  }

  if (!isMobile) {
    return <InfoPanel />;
  }
  return (
    <Drawer
      anchor="right"
      open={true}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "320px",
          boxSizing: "border-box",
          backgroundColor: isDarkMode ? "#1C1C1C" : "white",
        },
      }}
    >
      <InfoPanel />
    </Drawer>
  );
};

//main layout structure
const AppRootLayout = () => {
  const { isInfoPanelOpen, isMobile, toggleInfoPanel } = useContext(AppContext);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Navbar />
        <Outlet />
      </Box>

      <InfoPanelWithModal
        isOpen={isInfoPanelOpen}
        onClose={toggleInfoPanel}
        isMobile={isMobile}
      />
    </Box>
  );
};

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppRootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<OrdersTable />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;

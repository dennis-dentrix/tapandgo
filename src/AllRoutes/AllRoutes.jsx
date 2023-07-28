import { Routes, Route } from "react-router-dom";
import { Home, Discover, Settings } from "../pages";
import { Navigation } from "../components";
import { useAppState } from "../context/manageState";

export const AllRoutes = () => {
  const { isAuthenticated } = useAppState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      {isAuthenticated && <Navigation />};
    </>
  );
};

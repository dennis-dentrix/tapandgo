import { Routes, Route } from "react-router-dom";
import { Home, Discover, Settings } from "../pages";
import { Navigation } from "../components";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Navigation />;
    </>
  );
};

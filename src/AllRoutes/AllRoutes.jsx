import { Route, Routes } from "react-router-dom";
import {
  Home,
  Discover,
  Settings,
  Topup,
  Receipt,
  Account,
  Forum,
  Comments,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="discover" element={<Discover />} />
      <Route path="settings" element={<Settings />} />
      <Route path="topup" element={<Topup />} />
      <Route path="receipts" element={<Receipt />} />
      <Route path="account" element={<Account />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum/comments" element={<Comments />} />
    </Routes>
  );
};

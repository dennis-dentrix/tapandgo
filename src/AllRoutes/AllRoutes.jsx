import { Route, Routes } from "react-router-dom";
import {
  Home,
  Discover,
  Settings,
  Receipt,
  Account,
  Forum,
  Comments,
} from "../pages";
import { Qrcode } from "../components";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="discover" element={<Discover />} />
      <Route path="settings" element={<Settings />} />
      {/* <Route path="topup" element={<Topup />} /> */}
      <Route path="receipts" element={<Receipt />} />
      <Route path="account" element={<Account />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum/comments" element={<Comments />} />
      <Route path="/qrcode" element={<Qrcode />} />
    </Routes>
  );
};

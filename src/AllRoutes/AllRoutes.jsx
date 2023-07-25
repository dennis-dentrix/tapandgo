// import { Route, Routes } from "react-router-dom";
// // import { ProtectedRoutes } from "./ProtectedRoute";
// import {
//   Home,
//   Discover,
//   Settings,
//   Receipt,
//   Account,
//   Forum,
//   Comments,
// } from "../pages";
// import { Qrcode } from "../components";
// import { AppProvider } from "../context/manageState";
// import { Register } from "../pages/Register";
// import { Login } from "../pages/Login";

// export const AllRoutes = () => {
//   return (
//     <AppProvider>
//       <Routes>
//         <Route path="login" index element={<Login />} />
//         <Route path="register" index element={<Register />} />

//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="receipts" element={<Receipt />} />
//         <Route path="account" element={<Account />} />
//         <Route path="/forum" element={<Forum />} />
//         <Route path="/forum/comments" element={<Comments />} />
//         <Route path="/qrcode" element={<Qrcode />} />

//         <Route
//           path="/"
//           element={
//             <ProtectedRoutes>
//               {" "}
//               <Home />{" "}
//             </ProtectedRoutes>
//           }
//         />
//         <Route
//           path="/discover"
//           element={
//             <ProtectedRoutes>
//               {" "}
//               <Discover />{" "}
//             </ProtectedRoutes>
//           }
//         />
//         <Route
//           path="settings"
//           element={
//             <ProtectedRoutes>
//               {" "}
//               <Settings />{" "}
//             </ProtectedRoutes>
//           }
//         />

//         <Route path="discover" element={<Discover />} />
//         <Route path="settings" element={<Settings />} />
//       </Routes>
//     </AppProvider>
//   );
// };

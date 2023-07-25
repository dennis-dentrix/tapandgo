import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AllRoutes } from "./AllRoutes/AllRoutes";

import { Home, Discover, Settings, Login, Register } from "./pages";

import "./App.scss";
import "./fonts/Gordita-Black.otf";
import "./fonts/Gordita-BlackItalic.otf";
import "./fonts/Gordita-Bold.otf";
import "./fonts/Gordita-BoldItalic.otf";
import "./fonts/Gordita-Medium.otf";
import "./fonts/Gordita-MediumItalic.otf";
import "./fonts/Gordita-Light.otf";
import "./fonts/Gordita-LightItalic.otf";
import "./fonts/Gordita-Regular.otf";
import "./fonts/Gordita-RegularItalic.otf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./AllRoutes/AllRoutes";

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
import { AppProvider } from "./context/manageState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

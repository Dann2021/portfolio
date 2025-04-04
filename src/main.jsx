import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DannImage from "./assets/image/dann.png";
import NavBar from "./composants/MaNavBar.jsx";
import "./styles/flexible.css";
import "./styles/polices.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar logo={DannImage} />
    <App />
  </StrictMode>
);

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";
import "./lang/i18n.js";
import Leazy from "./components/leazy/Leazy.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Leazy />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);

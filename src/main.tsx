import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CreateRelatorio from "./pages/relatorio/create.tsx";
import IndexRelatorio from "./pages/relatorio/index.tsx";
import Login from "./pages/login.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<App />}>
            <Route path="/home" element={<IndexRelatorio />} />
            <Route path="/create" element={<CreateRelatorio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </>
);

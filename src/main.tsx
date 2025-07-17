import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CreateRelatorio from "./pages/relatorio/create.tsx";
import IndexRelatorio from "./pages/relatorio/index.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<IndexRelatorio />} />
            <Route path="/create" element={<CreateRelatorio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </>
);

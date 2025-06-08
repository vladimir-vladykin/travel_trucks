import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import Catalog from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <nav className={styles.nav}>
        {/* TODO logo here as well */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

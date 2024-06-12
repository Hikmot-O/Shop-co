import "./App.css";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;

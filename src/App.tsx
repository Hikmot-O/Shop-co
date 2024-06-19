import "./App.css";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import ProductCollection from "./components/ProductCollection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/collection" element={<ProductCollection />} />
    </Routes>
  );
}

export default App;

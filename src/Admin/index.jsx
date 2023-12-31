import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import { Route, Routes } from "react-router-dom";

export default function Admin() {
  return (
    <div className="row m-0 p-0">
      <div className="col-md-3 " style={{ height: "100vh" }}>
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

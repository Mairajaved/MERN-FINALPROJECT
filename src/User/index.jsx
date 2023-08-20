import UserNav from "./componets/UserNav";
import Brands from "./pages/Brands";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsByBrand from "./pages/ProductsByBrand";
import Profile from "./pages/Profile";
import ProductsByCategory from "./pages/ProductsByCategory";
import ProductPage from "./pages/ProductPage";
import CustomCart from "./pages/CustomCart";
import { Navigate, Route, Routes } from "react-router-dom";

export default function User() {
  return (
    <>
      <UserNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/cart" element={<CustomCart />} />

        <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:_id" element={<ProductPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/category/:CategoryName"
          element={<ProductsByCategory />}
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
}

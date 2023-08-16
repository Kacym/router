import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./pages/products/Products";
import MyCart from "./pages/my-cart/MyCart";
import MyOrders from "./pages/my-orders/MyOrders";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/products/ProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/products/:id" element={<ProductPage />}/>
        <Route path="/myCart" element={<MyCart />}/>
        <Route path="/myOrders" element={<MyOrders />}/>
      </Routes>
    </div>
  );
}

export default App;

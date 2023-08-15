import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./pages/products/Products";
import MyCart from "./pages/my-cart/MyCart";
import MyOrders from "./pages/my-orders/MyOrders";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/my-cart" element={<MyCart />}/>
        <Route path="/my-orders" element={<MyOrders />}/>
      </Routes>
    </div>
  );
}

export default App;

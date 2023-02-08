import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Footer from "./pages/shared/Footer";
import Header from "./pages/shared/Header";
import User from "./pages/user/User";

function App() {
  return (
    <div className="app_wrappeer">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/users" element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

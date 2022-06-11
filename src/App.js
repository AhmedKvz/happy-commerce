import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Single from "./pages/Single";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);
  console.log(setCart);
  return (
    <BrowserRouter>
      <div>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/single"
            element={<Single cart={cart} setCart={setCart} />}
          >
            <Route path=":id" element={<Single />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

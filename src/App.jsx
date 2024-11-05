import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer"
import ContactPage from "./components/pages/ContactPage/ContactPage"
import CartContextProvider from "./components/context/CartContext";
import CartProvider from "./components/pages/Cart/Cart";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} /> 
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartProvider />}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App

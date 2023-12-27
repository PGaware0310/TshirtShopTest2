import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import {useState} from "react";
import './App.css';

function App() {
  const [openCart,setOpenCart]=useState(false);

  const onShowCart=()=>{
    setOpenCart(true);
  }
  const onHideCart=()=>{
    setOpenCart(false);
  }

  return(
    <CartProvider>
    {openCart && <Cart onHide={onHideCart}/>}
  <Header onShow={onShowCart}/>
  </CartProvider>
  );
}

export default App;

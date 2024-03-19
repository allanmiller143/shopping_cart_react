import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
function Cart() {
  const {cartItens,isCartVisible} = useContext(AppContext);
  const total = cartItens.reduce((acc, item) => acc + item.price, 0);


  return (
    <section className = {`cart ${isCartVisible ? 'cart--active' : ''}`} >
      <div className="cart-itens">
        {cartItens.map((item) => <CartItem key={item.id} data = {item}/>)}
      </div>
      <div className="cart-resume"> {`Total: R$ ${total},00`} </div>
    </section>
  );
}

export default Cart;

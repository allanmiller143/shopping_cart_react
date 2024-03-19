import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {
  
  const {cartItens,setIsCartVisible,isCartVisible} = useContext(AppContext);

  const handleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <button type="button" className="cart__Button" onClick={() => handleCartVisibility()}>
      <AiOutlineShoppingCart/>
      <span className = "cart__status">
        {cartItens.length}
      </span>
    </button>
  );
}

export default CartButton;

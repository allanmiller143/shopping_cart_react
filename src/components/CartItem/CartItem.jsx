import React, { useContext } from 'react';
import {BsCartDashFill} from 'react-icons/bs';
import './CartItem.css';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function CartItem({data}){

  const {id,title, thumbnail, price } = data;
  const {cartItens,setCartItens} = useContext(AppContext);
  const handleRemoveItem = () => {
    const newCartItens = cartItens.filter(item => item.id != id);
    setCartItens(newCartItens);
    
  };

  return(
    <section className="cart-item">
      <img src ={thumbnail.replace(/\w\.jpg/gi,'W.jpg')} alt="Imagen do produto" className="cart-item__image"/>
      <div className="cart-item__description">
        <h3 className="cart-item__title">{title}</h3>
        <p className="cart-item__price">{`R$ ${price},00`}</p>
        <button type="button" className="cart-item__remove" onClick={handleRemoveItem}><BsCartDashFill/></button>
      </div>
      
    </section>

  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;


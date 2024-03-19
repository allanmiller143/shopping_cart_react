import React, { useContext } from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';
import {BsFillCartPlusFill} from 'react-icons/bs';
import AppContext from '../../context/AppContext';

function ProductCard({data}) {
  const { title, thumbnail, price } = data;
  const {setCartItens,cartItens} = useContext(AppContext);

  const handleAddCart = () => {
    setCartItens([...cartItens,data]);
  };

  return (
    <section className="product-card">
      <img src= {thumbnail.replace(/\w\.jpg/gi,'W.jpg')} alt="Product" className= "card__image"></img>
      <div className="card__infos">
        <h2 className= "card__price"> {`R$ ${price},00`}</h2>
        <h2 className="card__title"> {title}</h2>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;



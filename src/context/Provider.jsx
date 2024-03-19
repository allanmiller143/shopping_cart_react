import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import {useState} from 'react';

function Provider({children}){
  const [products, setProducts] = useState([]); // isso vai ser uma lista de produtos, o valor dentro do userState é o valor inicial 
  const [loading, setLoading] = useState(true);
  const [cartItens, setCartItens] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);



  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItens,
    setCartItens,
    isCartVisible,
    setIsCartVisible
  };

  return (
    <AppContext.Provider value = {value}>
      {children}

    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
  
}.isRequired;

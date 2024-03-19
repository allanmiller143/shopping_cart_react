import React,{useEffect, useContext} from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProduct';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
function Products() {

  const {products,setProducts,loading, setLoading} = useContext(AppContext); // agora a variavel vem do contexto hahay
  
  useEffect(() => {
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      setLoading(false);
    });
    
  }, []); // é igual ao obx, recebe uma função e uma lista de dependências, toda variavel que estiver dentro do array, vai ser recriada quando o valor da variável for alterado
  

  return (

    (loading ?
      <Loading/> :
      <section className="products container">
        {products.map((product) => < ProductCard key={product.id} data = {{title: product.title, price: product.price, thumbnail: product.thumbnail,id : product.id}}/>)}
      </section>)
    
  );
}

export default Products;

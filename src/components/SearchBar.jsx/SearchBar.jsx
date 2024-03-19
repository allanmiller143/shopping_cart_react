import React from 'react';
import {BsSearch} from 'react-icons/bs';
import './SearchBar.css';
import {useState,useContext} from 'react';
import fetchProducts from '../../api/fetchProduct';
import AppContext from '../../context/AppContext';


function SearchBar() {
  const [searchValue, setSearchValue] = useState(''); //como se fosse o danado do obx do flutter
  const {setProducts,setLoading} = useContext(AppContext);


  const handleSearch = async (event) => {
    event.preventDefault(); // evita q recarregue a página
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setLoading(false);
    setProducts(products);
    setSearchValue('');
    
    
  };

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        value={searchValue}
        type="search"
        placeholder="Buscar Produtos"
        className= "search__input"
        required
        onChange={({target}) => setSearchValue(target.value)}
      />
      <button type="submit" className="search__button"> 
        <BsSearch/>
      </button>
    </form>
    
  );
}

export default SearchBar;

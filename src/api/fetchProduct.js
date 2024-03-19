

// essa função faz uma consulta na api do mercado livre e retorna os dados
const fetchProducts = async (query) => { // aqui é bme parecido com o dart, la é o Future, aqui é esse fetch

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();
  return data.results;

};

export default fetchProducts;

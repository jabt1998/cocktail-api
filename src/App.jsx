import logo from './logo.svg';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import Cocktail from './container/Cocktail';
import Navbar from './component/Navbar';

const App = () => {


  const [cocktail, setCocktail] = useState(null)
  const [search, setSearch] = useState("")


  const getCocktail = () => {

    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    if ( search.length > 0 ) {
      url += `${search}`
    }

    fetch(url)
      .then(response => response.json())
        .then((jsonresponse) => {setCocktail(jsonresponse)})
  }

  useEffect(() => {
    getCocktail()
  }, [cocktail]);



  return (

    <section>
      <Navbar setSearch={setSearch} />
      <Cocktail cocktail={cocktail} />
    </section>
  );
}

export default App;

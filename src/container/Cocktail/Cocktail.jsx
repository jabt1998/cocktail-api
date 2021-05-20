import React from "react";
import styles from "./Cocktail.module.scss";
import CocktailCard from '../../component/CocktailCard';

const Cocktail = (props) => {

  const { cocktail } = props

  const cocktailJSX = cocktail ? cocktail.drinks.map( cocktails => <CocktailCard cocktails={cocktails} /> ) : ""

  return (
    <>
      <div className={styles.cocktailJSX} >{cocktailJSX}</div>
    </>
  );
};

export default Cocktail;

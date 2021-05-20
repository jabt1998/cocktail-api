import React, { useState } from "react";
import styles from "./CocktailCard.module.scss";


const CocktailCard = (props) => {

  const [ isFaceDown, setIsFaceDown ] = useState(false)

  const { cocktails } = props



  return (
    <section>
      <div className={styles.beercard} >
        <p className={styles.name} > {cocktails.strDrink} </p>
        <img className={styles.cocktailImage} src={cocktails.strDrinkThumb} alt="" />
      </div>
    </section>
  );
};

export default CocktailCard;

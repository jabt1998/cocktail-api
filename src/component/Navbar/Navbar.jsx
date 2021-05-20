import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {

  const { setSearch } = props;



  return (
    <section className={styles.navbar}   >
      <p className={styles.cocktailAPI}>Cocktail-API</p>
      <input className={styles.input} onInput={e => setSearch(e.target.value)} type="text" placeholder="Insert Cocktail here" />
      <div>
        <label htmlFor="">Checkbox</label>
        <input type="checkbox" name="" id="" />
      </div>
  
    </section>
  );
};

export default Navbar;

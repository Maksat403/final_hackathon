import React from "react";
import styles from "./startPage.module.css";
import cookingBook from "../assets/images/cookingBook.png";
import ingredients from "../assets/images/ingredients.png";
import addBook from "../assets/images/addBook.png";

const StartPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span style={{ fontSize: "6rem", marginBottom: "2rem" }}>
            Over 500 Easy <br /> Healthy Meal <br /> Preparation Recipes
          </span>
          <span style={{ fontSize: "1.6rem" }}>
            Get your family excited about meals again with easy
            <br /> and healthy recipes from GOODZY cooking blog.
          </span>
          <button>View All Recipes</button>
        </div>
      </div>
      <div className={styles.second_container}>
        <div className={styles.cookingBook}>
          <img src={cookingBook} alt="cookingBook" />
          <span style={{ fontSize: "2rem" }}>500+ recipes</span>
          <span>
            We've developed over 500 recipes.
            <br /> Follow for some more!
          </span>
        </div>
        <div className={styles.ingredients}>
          <div>
            <img src={ingredients} alt="ingredients" />
            <span style={{ fontSize: "2rem" }}>10 Ingredients</span>
            <span>
              All our recipes require not more than
              <br /> 10 simple ingredients
            </span>
          </div>
        </div>
        <div className={styles.addBook}>
          <div>
            <img src={addBook} alt="addBook" />
            <br />
            <span style={{ fontSize: "2rem" }}>Weekly updates</span>
            <span>
              We post new recipes every week, stay
              <br /> tuned for updates!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;

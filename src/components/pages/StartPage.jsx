import React from "react";
import styles from "./startPage.module.css";
import cookingBook from "../assets/images/cookingBook.png";
import ingredients from "../assets/images/ingredients.png";
import addBook from "../assets/images/addBook.png";

const StartPage = () => {
  return (
    <div>
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

        <div className={styles.section}>
          <div className={styles.container1}>
            <div className={styles.flex_verticval}>
              {/*Рекомендуемые рецепты start  */}
              <h5 className={styles.no_top_margin}>Рекомендуемые рецепты</h5>
              <div className={styles.recipes}>
                <div className={styles.recipes_container}>
                  <div className={styles.recipes_card}>
                    <a
                      href="cсылка на рецепт"
                      className={styles.recipe_image_wrap}
                    >
                      <img
                        src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d7806ecc7fb7d1d20fafd3_food-img-min-p-500.jpg"
                        alt="фотку"
                        className={styles.image_absolute}
                      />
                    </a>
                    <div className={styles.category}>Рекомендуемые</div>
                    <a
                      href="cсылка на рецепт"
                      className={styles.name_of_recipes}
                    >
                      <h5>Baked zucchini with tomatoes and onions</h5>
                    </a>
                  </div>
                  <div className={styles.recipes_card}>
                    <a
                      href="cсылка на рецепт"
                      className={styles.recipe_image_wrap}
                    >
                      <img
                        src="ccылка на фотку рецепта"
                        alt="фотку"
                        className={styles.image_absolute}
                      />
                    </a>
                    <div className={styles.category}>Рекомендуемые</div>
                    <a
                      href="cсылка на рецепт"
                      className={styles.name_of_recipes}
                    >
                      <h5>Baked zucchini with tomatoes and onions</h5>
                    </a>
                  </div>
                  <div className={styles.recipes_card}>
                    <a
                      href="cсылка на рецепт"
                      className={styles.recipe_image_wrap}
                    >
                      <img
                        src="ccылка на фотку рецепта"
                        alt="фотку"
                        className={styles.image_absolute}
                      />
                    </a>
                    <div className={styles.category}>Рекомендуемые</div>
                    <a
                      href="cсылка на рецепт"
                      className={styles.name_of_recipes}
                    >
                      <h5>Vegan pumpkin soup with tofu</h5>
                    </a>
                  </div>
                </div>
              </div>
              <a href="all recipes" className={styles.button_all_recipies}>
                Посмотреть все рецепты ⭐
              </a>
            </div>
          </div>
        </div>
        {/*Рекомендуемые рецепты finish  */}
        {/*ВЫБОР НЕДЕЛИ start  */}
        <div className={styles.section_no_paddings}>
          <div className={styles.pick_of_week}>
            <div className={styles.pick_of_week}>
              <div>
                <div className={styles.two_column}>
                  <div className={styles.text_left}>
                    <div className={styles.category_white}>ВЫБОР НЕДЕЛИ</div>
                    <h2 className={styles.max_18}>
                      Арахисовое масло и ягодное парфе
                    </h2>
                    <p className={styles.subheading}>
                      Этот питательный рецепт идеально подходит для людей всех
                      возрастов! Его готовят быстро и легко, но он очень вкусный
                      и обязательно произведет впечатление на ваших гостей.
                    </p>
                    <a href="cсылка на рецепт" className={styles.button_white}>
                      Посмотреть рецепт ⭐
                    </a>
                  </div>
                  <div className={styles.text_right}>
                    <img
                      src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d77f7c061b11532e8996e8_food-img-9-min-p-800.jpg"
                      alt="photo"
                      className={styles.img_right}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*ВЫБОР НЕДЕЛИ finish  */}
        {/* КАТЕГОРИИ start  */}
        <div className={styles.section}>
          <div className={styles.container1}>
            <div className={styles.flex_verticval}>
              <h2 className={styles.max_18}>Популярные категории</h2>
              <div className={styles.categories}>
                <div className={styles.categories_box}>
                  {/*  карточки категорий */}
                  <div className={styles.categories_recipies}>
                    <a href="breakfast" className={styles.categories_card}>
                      <div className={styles.categories_img}>
                        <img
                          src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62cd6432722416e4163b3d8c_categori-img-1-min.jpg"
                          alt="break"
                          className={styles.categories_img_set}
                        />
                      </div>
                      <h4 className={styles.categories_name}>Завтрак</h4>
                    </a>
                  </div>
                  <div className={styles.categories_recipies}>
                    <a href="breakfast" className={styles.categories_card}>
                      <div className={styles.categories_img}>
                        <img
                          src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62cd6432722416e4163b3d8c_categori-img-1-min.jpg"
                          alt="break"
                          className={styles.categories_img_set}
                        />
                      </div>
                      <h4 className={styles.categories_name}>Десерт</h4>
                    </a>
                  </div>
                  <div className={styles.categories_recipies}>
                    <a href="breakfast" className={styles.categories_card}>
                      <div className={styles.categories_img}>
                        <img
                          src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62cd6432722416e4163b3d8c_categori-img-1-min.jpg"
                          alt="break"
                          className={styles.categories_img_set}
                        />
                      </div>
                      <h4 className={styles.categories_name}>Напитки</h4>
                    </a>
                  </div>
                  <div className={styles.categories_recipies}>
                    <a href="breakfast" className={styles.categories_card}>
                      <div className={styles.categories_img}>
                        <img
                          src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62cd6432722416e4163b3d8c_categori-img-1-min.jpg"
                          alt="break"
                          className={styles.categories_img_set}
                        />
                      </div>
                      <h4 className={styles.categories_name}>Главные блюда</h4>
                    </a>
                  </div>
                  <div className={styles.categories_recipies}>
                    <a href="breakfast" className={styles.categories_card}>
                      <div className={styles.categories_img}>
                        <img
                          src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62cd6432722416e4163b3d8c_categori-img-1-min.jpg"
                          alt="break"
                          className={styles.categories_img_set}
                        />
                      </div>
                      <h4 className={styles.categories_name}>Перекус</h4>
                    </a>
                  </div>
                </div>
              </div>
              <a href="all recipies" className={styles.button_category}>
                Посмотреть все рецепты ⭐
              </a>
            </div>
          </div>
        </div>
        {/* КАТЕГОРИИ finish  */}
      </>
    </div>
  );
};

export default StartPage;

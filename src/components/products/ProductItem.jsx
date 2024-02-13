// import React from "react";
// import { useProducts } from "../../context/ProductContextProvider";
// import { useNavigate } from "react-router-dom";
// import styles from "./ProductItem.module.css";

// const ProductItem = ({ elem }) => {
//   const { deleteItem } = useProducts();
//   const navigate = useNavigate();

//   return (
//     <div className={styles.all_recipes}>
//       <div className={styles.w_container}>
//         <div className={styles.categories_bar_wrap}>
//           <div className={styles.categories_bar}>
//             <a href="/productList" className={styles.categories_bar_links}>
//               All recipes
//             </a>
//             <div className={styles.categories_bar_list}>
//               <div role="list" className={styles.categories_bar_cl}>
//                 <div role="listitem" className={styles.categories_bar_cli}>
//                   <a
//                     href="categories/breakfast"
//                     className={styles.categories_bar_link}
//                   >
//                     Breakfast
//                   </a>
//                 </div>
//                 <div role="listitem" className={styles.categories_bar_cli}>
//                   <a
//                     href="categories/breakfast"
//                     className={styles.categories_bar_link}
//                   >
//                     Dessert
//                   </a>
//                 </div>
//                 <div role="listitem" className={styles.categories_bar_cli}>
//                   <a
//                     href="categories/breakfast"
//                     className={styles.categories_bar_link}
//                   >
//                     Drinks
//                   </a>
//                 </div>
//                 <div role="listitem" className={styles.categories_bar_cli}>
//                   <a
//                     href="categories/breakfast"
//                     className={styles.categories_bar_link}
//                   >
//                     Main Course
//                   </a>
//                 </div>
//                 <div role="listitem" className={styles.categories_bar_cli}>
//                   <a
//                     href="categories/breakfast"
//                     className={styles.categories_bar_link}
//                   >
//                     Snacks
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.main_div}>
//         {/* FIRST VERSION */}
//         Title:{elem.title}
//         Price:{elem.price}
//         Category:{elem.category.title}
//         Description:{elem.description}
//         <img width={100} src={elem.image} alt="" />
//         {elem.is_author ? (
//           <>
//             <button onClick={() => deleteItem(elem.id)}>Delete</button>
//             <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
//           </>
//         ) : null}
//         {/* SECOND VERSION */}
//         {/* <div className={styles.container}>
//           <div className={styles.recipe}>
//             <div className={styles.recipe_left}>
//               <h1
//                 style={{
//                   marginTop: "0px",
//                   marginBottom: "20px",
//                   fontSize: "3rem",
//                   fontFamily: "DM Serif Display , sans-serif",
//                   lineHeight: 1.1,
//                   fontWeight: 400,
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {elem.title}
//               </h1>
//               <div className={styles.category_and_time}>
//                 <div className={styles.category_of_dish}>Name of Category</div>
//                 <div className={styles.category_of_time}>Time to Cook</div>
//               </div>
//               <p className={styles.description}>
//                 Desprition of dish. This nourishing recipe is perfect for all
//                 people of all ages! It is quick and easy to make, but packed
//                 with flavour and is sure to impress your guests.
//               </p>
//               <img
//                 src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d77f7c061b11532e8996e8_food-img-9-min-p-1080.jpg"
//                 alt="/"
//                 className={styles.img}
//               />
//               <div className={styles.bar_like_comment_favorites}>
//                 <button className={styles.likes}>Like</button>
//                 <button className={styles.likes}>Coomment</button>
//                 <button className={styles.likes}>favorites</button>
//               </div>
//               <div className={styles.ingrid_method}>
//                 <h2> Ингридиенты </h2>
//                 <p>
//                   Принимает значение Ингридиентов -Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Voluptates blanditiis accusamus
//                   perspiciatis, velit illo sit quia ut magni nisi doloribus
//                   nulla. Cupiditate ex, dolorum deleniti nihil voluptas placeat
//                   animi eos, deserunt corrupti reprehenderit nisi quos
//                   repellendus provident sed? Ducimus sit, totam veniam explicabo
//                   minima, ratione magnam laborum aliquid quam nostrum placeat
//                   minus ad ipsum quibusdam! Optio officiis veniam fugiat aliquid
//                   neque laudantium ullam debitis nobis tempora rem nisi et
//                   exercitationem ea mollitia quidem explicabo odio soluta velit
//                   fuga iure, iusto, repudiandae omnis? Aliquid culpa nesciunt
//                   autem consequatur ratione laudantium, commodi corrupti
//                   molestias dolore quas esse illum debitis provident hic fugit!
//                 </p>
//               </div>
//               <div className={styles.ingrid_method}>
//                 <h2> Метод Готовки </h2>
//                 <p>
//                   Принимает значение Метод Готовки -Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Voluptates blanditiis accusamus
//                   perspiciatis, velit illo sit quia ut magni nisi doloribus
//                   nulla. Cupiditate ex, dolorum deleniti nihil voluptas placeat
//                   animi eos, deserunt corrupti reprehenderit nisi quos
//                   repellendus provident sed? Ducimus sit, totam veniam explicabo
//                   minima, ratione magnam laborum aliquid quam nostrum placeat
//                   minus ad ipsum quibusdam! Optio officiis veniam fugiat aliquid
//                   neque laudantium ullam debitis nobis tempora rem nisi et
//                   exercitationem ea mollitia quidem explicabo odio soluta velit
//                   fuga iure, iusto, repudiandae omnis? Aliquid culpa nesciunt
//                   autem consequatur ratione laudantium, commodi corrupti
//                   molestias dolore quas esse illum debitis provident hic fugit!
//                 </p>
//               </div>
//               <div className={styles.cusine_serving_diff_time}>
//                 <div className={styles.diff}>
//                   DIFFICULTY: значение сложности{" "}
//                 </div>
//                 <div className={styles.time}>COOK TIME: значение времени </div>
//                 <div className={styles.serving}>
//                   SERVINGS: значение сервировки
//                 </div>
//                 <div className={styles.cusine}>CUSINE: значение нац кухни</div>
//                 <div className={styles.categories}>
//                   CATEGORIES: значение категорий
//                 </div>
//               </div>
//             </div>
//             <div className={styles.collumn_right}>
//               <div className={styles.about_us}>
//                 <h4>About US</h4>
//                 <img
//                   src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62d90dbda8820b12b681f01d_about-img-4-min-p-500.jpg"
//                   alt=""
//                   className={styles.img_about_us}
//                 />
//                 <p className={styles.p_about_us}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Suspendisse varius enim in eros elementum tristique
//                 </p>
//                 <a
//                   href="/about US"
//                   style={{
//                     color: "#a76e63",
//                     textDecoration: "underline",
//                   }}
//                 >
//                   About US
//                 </a>
//               </div>
//               <div className={styles.mail}>
//                 <img
//                   src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62ce9161155fca74dc1bb451_cookbook-img-min-p-500.jpg"
//                   alt=""
//                   className={styles.mail_img}
//                 />
//                 <div className={styles.email}>
//                   <h4 className={styles.sign}> Зарегистрируйся </h4>
//                   <div className={styles.enter_mail}>
//                     <form action="" className={styles.sign_mail}>
//                       <input
//                         type="text"
//                         placeholder="Enter your Email"
//                         className={styles.idk}
//                       />
//                       <input
//                         type="submit"
//                         className={styles.idk_2}
//                         value="Sign Up"
//                       />
//                     </form>
//                     <div></div>
//                     <div></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         {/* SECOND VERSION */}
//       </div>
//     </div>
//   );
// };

// export default ProductItem;

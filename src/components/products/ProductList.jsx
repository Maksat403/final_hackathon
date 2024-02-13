import React from "react";

const ProductList = () => {
  return (
    <div>
      ProductList
      <h1 style={{ marginTop: "25rem" }}>damn</h1>
    </div>
  );
};

export default ProductList;

// import React, { useEffect, useState } from "react";
// import { useProducts } from "../../context/ProductContextProvider";
// import { useSearchParams } from "react-router-dom";
// import ProductItem from "./ProductItem";
// //
// import styles from "./ProductList.module.css";

// const ProductList = () => {
//   const { getProducts, products, pages } = useProducts();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     getProducts();
//   }, []);

//   // Функция для получения массива номеров страниц
//   const getPagesCount = () => {
//     // В вашем случае здесь должен быть ваш логический код для определения количества страниц
//     // Пока я просто возвращаю массив от 1 до 10
//     return Array.from({ length: 10 }, (_, i) => i + 1);
//   };

//   return (
//     <div>
//       <h1>PRODUCT LIST</h1>
//       {products.map((elem) => (
//         <ProductItem elem={elem} key={elem.id} />
//       ))}
//     </div>
//     // <div>
//     //   <div className={styles.section_no_paddings}>
//     //     <div className={styles.pick_of_week}>
//     //       <div className={styles.pick_of_week}>
//     //         <div>
//     //           <div className={styles.two_column}>
//     //             <div className={styles.text_left}>
//     //               <div className={styles.category_white}>ВЫБОР НЕДЕЛИ</div>
//     //               <h2 className={styles.max_18}>
//     //                 Арахисовое масло и ягодное парфе
//     //               </h2>
//     //               <p className={styles.subheading}>
//     //                 Этот питательный рецепт идеально подходит для людей всех
//     //                 возрастов! Его готовят быстро и легко, но он очень вкусный и
//     //                 обязательно произведет впечатление на ваших гостей.
//     //               </p>
//     //               <a href="cсылка на рецепт" className={styles.button_white}>
//     //                 Посмотреть рецепт ⭐
//     //               </a>
//     //             </div>
//     //             <div className={styles.text_right}>
//     //               <img
//     //                 src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d77f7c061b11532e8996e8_food-img-9-min-p-800.jpg"
//     //                 alt="photo"
//     //                 className={styles.img_right}
//     //               />
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className={styles.section}>
//     //     <div className={styles.container}>
//     //       <div className={styles.flex_vertical}>
//     //         <h1>Рецепты</h1>
//     //         <div className={styles.w_container}>
//     //           <div className={styles.categories_bar_wrap}>
//     //             <div className={styles.categories_bar}>
//     //               <a
//     //                 href="/productList"
//     //                 className={styles.categories_bar_links}
//     //               >
//     //                 All recipes
//     //               </a>
//     //               <div className={styles.categories_bar_list}>
//     //                 <div role="list" className={styles.categories_bar_cl}>
//     //                   <div
//     //                     role="listitem"
//     //                     className={styles.categories_bar_cli}
//     //                   >
//     //                     <a
//     //                       href="categories/breakfast"
//     //                       className={styles.categories_bar_link}
//     //                     >
//     //                       Breakfast
//     //                     </a>
//     //                   </div>
//     //                   <div
//     //                     role="listitem"
//     //                     className={styles.categories_bar_cli}
//     //                   >
//     //                     {" "}
//     //                     <a
//     //                       href="categories/breakfast"
//     //                       className={styles.categories_bar_link}
//     //                     >
//     //                       Dessert
//     //                     </a>
//     //                   </div>
//     //                   <div
//     //                     role="listitem"
//     //                     className={styles.categories_bar_cli}
//     //                   >
//     //                     <a
//     //                       href="categories/breakfast"
//     //                       className={styles.categories_bar_link}
//     //                     >
//     //                       Drinks
//     //                     </a>
//     //                   </div>
//     //                   <div
//     //                     role="listitem"
//     //                     className={styles.categories_bar_cli}
//     //                   >
//     //                     <a
//     //                       href="categories/breakfast"
//     //                       className={styles.categories_bar_link}
//     //                     >
//     //                       Main Course
//     //                     </a>
//     //                   </div>
//     //                   <div
//     //                     role="listitem"
//     //                     className={styles.categories_bar_cli}
//     //                   >
//     //                     <a
//     //                       href="categories/breakfast"
//     //                       className={styles.categories_bar_link}
//     //                     >
//     //                       Snacks
//     //                     </a>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className={styles.recipes_clw}>
//     //           <div role="list" className={styles.recipes_cl}>
//     //             <div role="listitem" className={styles.recipes_cli}>
//     //               <a href="/" className={styles.recipe_img}>
//     //                 <img
//     //                   src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d782ab6bb311d600f11c50_food-img-7-min-p-500.jpg"
//     //                   alt=""
//     //                   className={styles.absolute_img}
//     //                 />
//     //                 <div className={styles.label_w}>
//     //                   <img
//     //                     src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62cd612bcbc63b4dd49e68e8_bolt_black_24dp%201.svg"
//     //                     alt=""
//     //                     className={styles.new_icon}
//     //                   />
//     //                   <div>New</div>
//     //                 </div>
//     //               </a>
//     //               <div className={styles.recipe_cat}>
//     //                 <div className={styles.category_recipe}>Category</div>
//     //                 <div className={styles.category_recipe_2}>Time</div>
//     //               </div>
//     //               <a href="ссылка на рецепт" class={styles.recipe_link}>
//     //                 <h5 className={styles.h5}>
//     //                   Название блюда Lorem ipsum dolor sit amet
//     //                 </h5>
//     //               </a>
//     //             </div>
//     //             <div role="listitem" className={styles.recipes_cli}>
//     //               <a href="/" className={styles.recipe_img}>
//     //                 <img
//     //                   src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d782ab6bb311d600f11c50_food-img-7-min-p-500.jpg"
//     //                   alt=""
//     //                   className={styles.absolute_img}
//     //                 />
//     //                 <div className={styles.label_w}>
//     //                   <img
//     //                     src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62cd612bcbc63b4dd49e68e8_bolt_black_24dp%201.svg"
//     //                     alt=""
//     //                     className={styles.new_icon}
//     //                   />
//     //                   <div>New</div>
//     //                 </div>
//     //               </a>
//     //               <div className={styles.recipe_cat}>
//     //                 <div className={styles.category_recipe}>Category</div>
//     //                 <div className={styles.category_recipe_2}>Time</div>
//     //               </div>
//     //               <a href="ссылка на рецепт" class={styles.recipe_link}>
//     //                 <h5 className={styles.h5}>
//     //                   Название блюда Lorem ipsum dolor sit amet
//     //                 </h5>
//     //               </a>
//     //             </div>
//     //             <div role="listitem" className={styles.recipes_cli}>
//     //               <a href="/" className={styles.recipe_img}>
//     //                 <img
//     //                   src="https://assets.website-files.com/62cd5ea3dc936d36b7740cad/62d782ab6bb311d600f11c50_food-img-7-min-p-500.jpg"
//     //                   alt=""
//     //                   className={styles.absolute_img}
//     //                 />
//     //                 <div className={styles.label_w}>
//     //                   <img
//     //                     src="https://assets.website-files.com/62cd3e14b010c83363db03b5/62cd612bcbc63b4dd49e68e8_bolt_black_24dp%201.svg"
//     //                     alt=""
//     //                     className={styles.new_icon}
//     //                   />
//     //                   <div>New</div>
//     //                 </div>
//     //               </a>
//     //               <div className={styles.recipe_cat}>
//     //                 <div className={styles.category_recipe}>Category</div>
//     //                 <div className={styles.category_recipe_2}>Time</div>
//     //               </div>
//     //               <a href="ссылка на рецепт" class={styles.recipe_link}>
//     //                 <h5 className={styles.h5}>
//     //                   Название блюда Lorem ipsum dolor sit amet
//     //                 </h5>
//     //               </a>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     {/* PAGINATION */}
//     //     <div className={styles.pagination}>
//     //       {/* Кнопки предыдущей и следующей страниц */}
//     //       <button
//     //         onClick={() => setCurrentPage(currentPage - 1)}
//     //         disabled={currentPage === 1}
//     //       >
//     //         Предыдущая
//     //       </button>
//     //       {getPagesCount().map((item) => (
//     //         <button
//     //           key={item}
//     //           onClick={() => setCurrentPage(item)}
//     //           className={item === currentPage ? styles.activePage : ""}
//     //         >
//     //           {item}
//     //         </button>
//     //       ))}
//     //       <button
//     //         onClick={() => setCurrentPage(currentPage + 1)}
//     //         disabled={currentPage === getPagesCount().length}
//     //       >
//     //         Следующая
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default ProductList;

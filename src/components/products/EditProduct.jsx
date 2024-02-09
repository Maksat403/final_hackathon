// import React, { useEffect, useState } from "react";
// import { useProducts } from "../../context/ProductContextProvider";
// import { useParams } from "react-router-dom";
// import styles from "./EditProduct.module.css";

// const EditProduct = () => {
//   const { categories, getCategories, getOneProduct, oneProduct, editItem } =
//     useProducts();
//   const [title, setTitle] = useState(oneProduct.title);
//   const [description, setDescription] = useState(oneProduct.description);
//   const [category, setCategory] = useState(oneProduct.category);
//   const [img, setImg] = useState(null);
//   const { id } = useParams();
//   useEffect(() => {
//     getCategories();
//     getOneProduct(id);
//   }, []);
//   useEffect(() => {
//     if (oneProduct) {
//       setTitle(oneProduct.title);
//       setDescription(oneProduct.description);
//       setCategory(oneProduct.category);
//     }
//   }, [oneProduct]);

//   const handleClick = () => {
//     const newProduct = new FormData();
//     newProduct.append("title", title);
//     newProduct.append("description", description);
//     newProduct.append("category", category);
//     if (img) {
//       newProduct.append("image", img);
//     }
//     editItem(id, newProduct);
//   };
//   // без изменений (ВСЕ ЧИСТО)
//   return (
//     <div>
//       <h2>Edit Product</h2>
//       <input
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="title"
//         type="text"
//         value={title}
//       />
//       <input
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="description"
//         type="text"
//         value={description}
//       />

//       <input
//         onChange={(e) => setImg(e.target.files[0])}
//         placeholder="img"
//         type="file"
//         accept="image/"
//       />
//       <select onChange={(e) => setCategory(e.target.value)}>
//         <option>Choose category</option>
//         {categories.map((elem) => (
//           <option value={elem.id} key={elem.id}>
//             {elem.title}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleClick}>Save</button>
//     </div>
//     // <div>
//     //   <div
//     //     style={{
//     //       width: "50%",
//     //       height: "50%",
//     //       marginLeft: "25%",
//     //       marginTop: "5%",
//     //       marginBottom: "5%",
//     //       display: "flex",
//     //       flexDirection: "column",
//     //       justifyContent: "space-between",
//     //     }}
//     //   >
//     //     <h2
//     //       style={{
//     //         marginLeft: "40%",
//     //         fontWeight: 400,
//     //       }}
//     //     >
//     //       Edit Receipt ⭐
//     //     </h2>
//     //     <input
//     //       onChange={(e) => setTitle(e.target.value)}
//     //       placeholder="Title"
//     //       type="text"
//     //       className={styles.inputs}
//     //     />
//     //     <option
//     //       style={{
//     //         marginTop: "5%",
//     //         fontWeight: "600",
//     //         fontSize: "120%",
//     //       }}
//     //     >
//     //       Редактировать картинку блюда
//     //     </option>
//     //     <input
//     //       onChange={(e) => setImg(e.target.files[0])}
//     //       placeholder="img"
//     //       type="file"
//     //       accept="image/"
//     //       className={styles.inputs_img}
//     //     />
//     //     <h2 style={{ margin: "1% auto" }}>Edit Difficulty</h2>
//     //     {/* <input placeholder="Difficulty" type="text" /> */}
//     //     <select name="Difficulty" id="" className={styles.inputs_diff}></select>
//     //     <input type="number" placeholder="serves" className={styles.inputs} />
//     //     <input
//     //       type="text"
//     //       placeholder="time to cook"
//     //       className={styles.inputs}
//     //     />
//     //     <textarea
//     //       rows="10"
//     //       cols="50"
//     //       placeholder="Список Ингридиентов : Пример
//     //     1)молоко 1л
//     //     2)яйца 5шт"
//     //       className={styles.inputs_ingrid_method}
//     //     ></textarea>
//     //     <textarea
//     //       rows="10"
//     //       cols="50"
//     //       placeholder="как готовить, метод : Пример
//     //     1)молоко скпипить
//     //     2)яйца пожарить на сковороде"
//     //       className={styles.inputs_ingrid_method}
//     //     ></textarea>
//     //     <textarea
//     //       rows="5"
//     //       cols="30"
//     //       onChange={(e) => setDescription(e.target.value)}
//     //       placeholder="Коротко о блюде"
//     //       type="text"
//     //       className={styles.inputs_ingrid_method}
//     //     ></textarea>
//     //     <h2 style={{ margin: "1% auto" }}> Редактировать нац. кухню </h2>
//     //     <select className={styles.inputs} name="Cusine" id=""></select>
//     //     <input
//     //       onChange={(e) => setCategory(e.target.value)}
//     //       placeholder="category"
//     //       type="text"
//     //       className={styles.inputs}
//     //     />
//     //     <select
//     //       onChange={(e) => setCategory(e.target.value)}
//     //       className={styles.inputs}
//     //     >
//     //       <option> Choose Category</option>
//     //       {categories.map((elem) => (
//     //         <option value={elem.id} key={elem.id}>
//     //           {elem.title}
//     //         </option>
//     //       ))}
//     //     </select>
//     //     <button className={styles.inputs_add}>Edit Receipt</button>
//     //   </div>
//     // </div>
//   );
// };

// export default EditProduct;

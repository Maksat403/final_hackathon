import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AddProduct = () => {
  const { createProduct, categories, getCategories } =
    useContext(productContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cooking_time, setCooking_Time] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [type, setType] = useState("");
  const [recipe, setRecipe] = useState("");
  const [level, setLevel] = useState("");
  const [owner, setOwner] = useState("");
  const [ingridients, setIngridients] = useState([]);

  function handleSave() {
    const newProduct = {
      ingridients: ingridients.map((item) => ({
        ingridient: item.ingridient,
        quantity: item.quantity,
      })),
      name,
      description,
      cooking_time,
      cuisine,
      type,
      recipe,
      level,
      owner,
    };
    createProduct(newProduct, navigate);
    console.log(newProduct);
  }
  const handleAddIngridient = () => {
    setIngridients([...ingridients, { ingridient: "", quantity: "" }]);
  };
  const handleIngridientChange = (index, e) => {
    const { name, value } = e.target;
    const updatedIngridients = [...ingridients];
    updatedIngridients[index][name] = value;
    setIngridients(updatedIngridients);
  };
  return (
    <div>
      <h2>Add Product</h2>
      //!
      <button onClick={handleAddIngridient}>Add Ingridient</button>
      {ingridients.map((ingridient, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="ingridient"
            name="ingridient"
            value={ingridient.ingridient}
            onChange={(e) => handleIngridientChange(index, e)}
          />
          <input
            type="number"
            placeholder="quantity"
            name="quantity"
            value={ingridient.quantity}
            onChange={(e) => handleIngridientChange(index, e)}
          />
        </div>
      ))}
      //!
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="cooking_time"
        value={cooking_time}
        onChange={(e) => setCooking_Time(e.target.value)}
      />
      <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
        <option>Choose cusine...</option>
        <option>Japan</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Choose type...</option>
        <option>Soup</option>
      </select>
      <input
        type="text"
        placeholder="recipe"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option>Choose level...</option>
        <option>Easy</option>
      </select>
      <input
        type="text"
        placeholder="owner id"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      //!
      <button onClick={handleSave}>Save Products</button>
    </div>
  );
};

export default AddProduct;

// const AddProduct = () => {
//   const { createProduct, categories, getCategories } = useProducts();
//   console.log(categories);
//   const navigate = useNavigate();
//   // useEffect(() => {
//   //   getCategories();
//   // }, []);

//   const [name, setName] = useState("");
//   const [cuisine, setCuisine] = useState("");
//   const [type, setType] = useState("");
//   const [cooking_time, setCooking_Type] = useState("");
//   const [recipe, setRecipe] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [owner, setOwner] = useState("");
//   const handleClick = () => {
//     const newProduct = new FormData();
//     newProduct.append("name", name);
//     newProduct.append("cuisine", cuisine);
//     newProduct.append("type", type);
//     newProduct.append("cooking_time", cooking_time);
//     newProduct.append("recipe", recipe);
//     newProduct.append("description", description);
//     newProduct.append("photo", photo);
//     newProduct.append("category", category);
//     newProduct.append("owner", owner);
//     createProduct(newProduct);
//     navigate("/productList");
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <input
//         onChange={(e) => setName(e.target.value)}
//         placeholder="name"
//         type="text"
//       />
//       <select onChange={(e) => setCuisine(e.target.value)}>
//         <option>Choose cuisine</option>
//         {categories.map((elem) => (
//           <option value={elem.id} key={elem.id}>
//             {elem.name}
//           </option>
//         ))}
//       </select>
//       <select onChange={(e) => setType(e.target.value)}>
//         <option>Choose setType</option>
//         {categories.map((elem) => (
//           <option value={elem.id} key={elem.id}>
//             {elem.name}
//           </option>
//         ))}
//       </select>
//       <input
//         onChange={(e) => setCooking_Type(parseInt(e.target.value))}
//         placeholder="Time To Cook"
//         type="number"
//       />
//       <input
//         onChange={(e) => setRecipe(parseInt(e.target.value))}
//         placeholder="Recipe"
//         type="text"
//       />
//       <input
//         onChange={(e) => setOwner(parseInt(e.target.value))}
//         placeholder="Owner Id"
//         type="number"
//       />
//       //!
//       {/* <input
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="description"
//         type="text"
//       />
//       <input
//         onChange={(e) => setPhoto(e.target.files[0])}
//         placeholder="photo"
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
//       </select> */}
//       <button onClick={handleClick}>Add Product</button>
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
//     //       Add Receipt ⭐
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
//     //       Добавьте картинку блюда
//     //     </option>
//     //     <input
//     //       onChange={(e) => setImg(e.target.files[0])}
//     //       placeholder="img"
//     //       type="file"
//     //       accept="image/"
//     //       className={styles.inputs_img}
//     //     />
//     //     <h2 style={{ margin: "1% auto" }}>Choose Difficulty</h2>
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
//     //       1)молоко 1л
//     //       2)яйца 5шт"
//     //       className={styles.inputs_ingrid_method}
//     //     ></textarea>
//     //     <textarea
//     //       rows="10"
//     //       cols="50"
//     //       placeholder="как готовить, метод : Пример
//     //       1)молоко скпипить
//     //       2)яйца пожарить на сковороде"
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
//     //     <h2 style={{ margin: "1% auto" }}> Выбрать нац. кухню </h2>
//     //     <select className={styles.inputs} name="Cusine" id=""></select>
//     //     {/* <input
//     //       onChange={(e) => setCategory(e.target.value)}
//     //       placeholder="category"
//     //       type="text"
//     //       className={styles.inputs}
//     //     /> */}
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
//     //     <button className={styles.inputs_add} onClick={handleClick}>
//     //       Add Receipt
//     //     </button>
//     //   </div>
//     // </div>
//   );
// };

// export default AddProduct;

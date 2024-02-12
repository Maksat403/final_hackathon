import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct, ingridients, getIngridients } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    // Вызываем функцию для получения данных об ингредиентах
    getIngridients();
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cooking_time, setCooking_Time] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [type, setType] = useState("");
  const [recipe, setRecipe] = useState("");
  const [level, setLevel] = useState("");
  const [ingridient, setIngridient] = useState("");
  // const [ingridientsArray, setIngridientsArray] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    const newProduct = new FormData();
    newProduct.append("name", name);
    newProduct.append("description", description);
    newProduct.append("cooking_time", cooking_time);
    newProduct.append("cuisine", cuisine);
    newProduct.append("type", type);
    newProduct.append("recipe", recipe);
    newProduct.append("level", level);
    newProduct.append("ingridient", ingridient);

    // Используйте состояние ingridientsArray для добавления ингредиентов в новый продукт
    // ingridientsArray.forEach((ingridient, index) => {
    //   newProduct.append(`ingridients[${index}]`, ingridient);
    // });

    createProduct(newProduct);
    navigate("/productList");
  };

  return (
    <div>
      <h2>Add Product</h2>
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
      //!
      {/* Используйте состояние ingridientsArray для установки значения */}
      <select
        // value={ingridient}
        onChange={(e) => setIngridient(e.target.value)}
      >
        <option>Choose ingridient</option>
        {/* Отображаем опции для каждого ингредиента из состояния */}
        {ingridients.map((elem) => (
          <option key={elem.id} value={elem.id}>
            {elem.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
};

export default AddProduct;

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

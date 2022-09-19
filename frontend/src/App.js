import "./App.css";
import { BrowserRouter, Route, Switch } from "react-dom";
import { useEffect, useState } from "react";
import SetProduct from "./components/products";

const apiURL = "http://127.0.0.1:8000/api/products/";

const listas = async () => {
  return await fetch(apiURL);
};

function App() {
  //esto es lo que lo va a mostrar en la pagina
  const [categories, setCategories] = useState([]);

  //modificar por AXIOS con promesas y el nombre de la funcion
  //CAMBIAR NOMBRE A FUNCION, YA QUE NO TIENE SENTIDO
  const listingLists = async () => {
    try {
      const res = await listas();
      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listingLists();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <section key={category.id}>
          <span className="tittle2">{category.name}</span>
          <article className="container2">
          {category.products.map((item) => (
              <SetProduct key={item.id} product={item} />
            ))}
          </article>
        </section>
      ))}
    </>
  );
}

export default App;
/*

*/
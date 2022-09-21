import { useEffect, useState } from "react";
import SetCategory from "./components/category";

const apiURL = "http://127.0.0.1:8000/api/products/";

const products = async () => {
    return await fetch(apiURL);
  };

function App() {
  //esto es lo que lo va a mostrar en la pagina
  const [categories, setCategories] = useState([]);

  //modificar por AXIOS con promesas y el nombre de la funcion
  //CAMBIAR NOMBRE A FUNCION, YA QUE NO TIENE SENTIDO
  const showProducts = async () => {
    try {
      const res = await products();
      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showProducts();
  }, []);
  //
  return (
    <>      {categories.map((category) => (
        <SetCategory key={category.id} category={category} />
      ))}
    </>

  );
}

export default App;
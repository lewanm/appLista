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
  const [products, setProducts] = useState([]);

  //modificar por AXIOS con promesas y el nombre de la funcion
  //CAMBIAR NOMBRE A FUNCION, YA QUE NO TIENE SENTIDO
  const listingLists = async () => {
    try {
      const res = await listas();
      const data = await res.json();
      setProducts(data.pl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listingLists();
  }, []);
  //          cambiar los nombres
  // Product -> Category
  // quedaria {category.name}
  // item -> product
  return (
    <>
      {products.map((product) => (
        <section>
          <span className="tittle2">{product.categoryName}</span>
          <article className="container2">
            {product.items.map((item) => (
              <SetProduct key={item.productId} product={item} />
            ))}
          </article>
        </section>
      ))}
    </>
  );
}

export default App;

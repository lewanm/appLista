import "./App.css";
import { BrowserRouter, Route, Switch } from "react-dom";
import { useEffect, useState } from "react";
import GetList from "./components/revisar/getList";

const apiURL = "http://127.0.0.1:8000/api/lists/1";

const listas = async () => {
  return await fetch(apiURL);
};

function App() {
  //esto es lo que lo va a mostrar en la pagina
  const [lists, setLists] = useState([]);

  //modificar por AXIOS con promesas y el nombre de la funcion
  //CAMBIAR NOMBRE A FUNCION, YA QUE NO TIENE SENTIDO
  const listingLists = async () => {
    try {
      const res = await listas();
      const data = await res.json();
      setLists(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listingLists();
  }, []);
  //
  return (
    <>
      {lists.map((list) => (
        <GetList key={list.id} list={list} />
      ))}
    </>
  );
}

export default App;
/*

*/

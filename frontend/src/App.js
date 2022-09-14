import "./App.css";
import { useEffect, useState } from "react";
import SetList from "./components/lista";

const apiURL = "http://127.0.0.1:8000/api/lists/";
//ver que nombre le pongo
const listas = async () => {
  return await fetch(apiURL);
};

function App() {
  //esto es lo que lo va a mostrar en la pagina
  const [lists, setLists] = useState([]);

  //modificar por AXIOS con promesas y el nombre de la funcion
  const listingLists = async () => {
    try {
      const res = await listas();
      const data = await res.json();
      setLists(data.lists);
    } catch (error) {
      console.log(error);
    }

    /*     listas().then((res)=>{

    }).catch((error)=>{

    }) */
  };

  useEffect(() => {
    listingLists();
  }, []);

  return (
    <>
      <h2>Mis listas</h2>
      {lists.map((list) => (
        <SetList key={list.id} list={list} />
      ))}
      <span className="btn-add">➕</span>
    </>
  );
}

export default App;

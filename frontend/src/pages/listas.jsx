import { useEffect, useState } from "react";

//COMPONENTES
import SetList from "./components/lista";

const apiURL = "http://127.0.0.1:8000/api/lists/";
//ver que nombre le pongo
const listas = async () => {
  return await fetch(apiURL);
};

//que nombre le pongo a esto?
export default function Lists() {
  const [lists, setLists] = useState([]);

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

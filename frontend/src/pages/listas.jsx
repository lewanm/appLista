//COMPONENTES
import { useState } from "react";
import { useEffect } from "react";
import SetList from "./components/lista";

const apiURL = "http://127.0.0.1:8000/api/lists/";
const a = await fetch(apiURL);

const lists = () => {
  try {
    const res = a;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const misListas2 = [
  {
    id: 1,
    name: "Supermercado",
    description: "Las compras de inicio de mes!",
  },
  {
    id: 2,
    name: "SKINQUER",
    description: "Sin descripcion",
  },
  {
    id: 3,
    name: "Ferreteria",
    description: "Chuchitos que tengo que comprar",
  },
];
//que nombre le pongo a esto?
export default function Lists(props) {
  const [lists, setLists] = useState([]);

  return (
    <>
      <h2>Mis listas</h2>
      {misListas2.map((list) => (
        <SetList list={list} />
      ))}
    </>
  );
}

import React, { useState } from "react";
import { Link } from "../Link";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { useUserStore } from "../state-management/user.store";

export const HomePage = () => {
  //let titulo = "MI APP USUARIOS"
  //HOOK USE STATE
  const [titulo, setTitulo] = useState("MI APP USUARIOS");
  const [count, setCount] = useState(0)
   const {usuarios} = useUserStore();
  const modificarTitulo = () => {
    //titulo = "MI APP USUARIOS CRUD"
    setTitulo("MI APP USUARIOS CRUD");
    console.log(titulo);
  };

  return (
    <>
      <h1>{titulo}</h1>
      <button onClick={() => modificarTitulo()}>CAMBIAR TITULO</button>
      <div>
        <Link rutaLink="https://vite.dev" rutaImg={viteLogo} />
        <Link rutaLink="https://react.dev" rutaImg={reactLogo} />
      </div>
      <h1>VitE + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>USUARIOS FROM STATE</h1>
      {JSON.stringify(usuarios)}
    </>
  );
};

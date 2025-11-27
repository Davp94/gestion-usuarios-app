import React, { useState } from "react"

export const HomePage = () => {
    //let titulo = "MI APP USUARIOS"
    //HOOK USE STATE
    const [titulo, setTitulo] = useState("MI APP USUARIOS");

    const modificarTitulo = () => {
        //titulo = "MI APP USUARIOS CRUD"
        setTitulo("MI APP USUARIOS CRUD")
        console.log(titulo)
    }
    return (
        <>
            <h1>{titulo}</h1>
            <button onClick={()=>modificarTitulo()}>CAMBIAR TITULO</button>
            <div></div>
            <div></div>
        </>
    )
}
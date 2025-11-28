import React, { useState } from "react"
import type { UsuarioResponse } from "../types/response/usuarios.response";
import { UsuarioCard } from "../components/usuarios/UsuarioCard";

export const UsuariosPage = () => {
    //let titulo = "MI APP USUARIOS"
    //HOOK USE STATE
    const [usuarios, setUsuarios] = useState<UsuarioResponse[]>(
        [
            {id: 1, nombre: "usuario 1", correo: "correo1@test.com", rol: "ADMIN"},
            {id: 2, nombre: "usuario 2", correo: "correo2@test.com", rol: "SIMPLE"},
            {id: 3, nombre: "usuario 2", correo: "correo2@test.com", rol: "SIMPLE"}
        ]
    );

    return (
        <>
            {/* renderizado de listas */}
            {usuarios.map((usuario, index) => (
                <UsuarioCard usuario={usuario}/>
            ))}
            <div></div>
            <div></div>
        </>
    )
}
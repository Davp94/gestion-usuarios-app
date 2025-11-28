import React, { useState } from "react"
import type { UsuarioResponse } from "../types/response/usuarios.response";
import { useNavigate } from "react-router";

export const UsuarioDetallePage = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <button  onClick={()=>navigate("/usuario")}>Volver</button>
            <div className="">
                <label>{usuario.nombre}</label>
                <label>{usuario.correo}</label>
                <label>{usuario.rol}</label>
            </div>
        </>
    )
}
import React, { useEffect, useState } from "react";
import type { UsuarioResponse } from "../types/response/usuarios.response";
import { useNavigate } from "react-router";
import { getSelectedUser, useUserStore } from "../state-management/user.store";

export const UsuarioDetallePage = () => {
  const navigate = useNavigate();
  //const [usuario, setUsuario] = useState<UsuarioResponse | null>(null);
  const usuario = useUserStore(getSelectedUser);

//   useEffect(() => {
//     setUsuario(getUsuarioSelected);
//   }, []);
  return (
    <>
      <button onClick={() => navigate("/usuario")}>Volver</button>
      {usuario != null && (
        <>
          <div className="">
            <label>DATOS USUARIO</label>
            <label>{usuario.nombre}</label>
            <label>{usuario.correo}</label>
            <label>{usuario.rol}</label>
          </div>
        </>
      )}
    </>
  );
};

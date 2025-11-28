import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuarios.response";
interface UsuarioDetalleProps {
    usuario: UsuarioResponse
}
export const UsuarioCard = ({usuario}: UsuarioDetalleProps) => {
    
    const navigate = useNavigate();

    return (
        <>
            <div key={usuario.id} className="" onClick={()=>navigate("/usuario/detalle")}>
                <label>{usuario.nombre}</label>
                <div className="">
                    <label>{usuario.correo}</label>
                    <label>{usuario.rol}</label>
                </div>
            </div>
        </>
    )
}
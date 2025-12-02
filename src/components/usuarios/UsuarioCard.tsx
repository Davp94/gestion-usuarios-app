import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuarios.response";
import { useUserStore } from "../../state-management/user.store";
interface UsuarioDetalleProps {
    usuario: UsuarioResponse
}
export const UsuarioCard = ({usuario}: UsuarioDetalleProps) => {
    
    const navigate = useNavigate();
    const {setUsuarioSelected} = useUserStore();
    const onSubmit = () => {
        setUsuarioSelected(usuario);
        navigate(`/usuario/detalle`)
    }
    return (
        <>
            <div className="" onClick={()=>onSubmit()}>
                <label>{usuario.nombre}</label>
                <div className="">
                    <label>{usuario.correo}</label>
                    <label>{usuario.rol}</label>
                </div>
            </div>
        </>
    )
}
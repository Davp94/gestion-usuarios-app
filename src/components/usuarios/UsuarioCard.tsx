import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuarios.response";
import { useUserStore } from "../../state-management/user.store";
import { Pencil, Trash } from "lucide-react";
interface UsuarioDetalleProps {
    usuario: UsuarioResponse
    setModalOpen: (usuario: UsuarioResponse) => void;
}
export const UsuarioCard = ({usuario, setModalOpen}: UsuarioDetalleProps) => {
    
    const navigate = useNavigate();
    const {setUsuarioSelected, deleteUsuario} = useUserStore();
    const onSubmit = () => {
        setUsuarioSelected(usuario);
        navigate(`/usuario/detalle`)
    }

    const handleEditUsuario = () => {
        setModalOpen(usuario);
    }

    const handleDeleteUsuario = () => {
        deleteUsuario(usuario.id);
    }
    return (
        <>
            <div className="usuarios-card" onClick={()=>onSubmit()}>
                <div className="usuarios-card__header">
                    <label className="usuarios-card__name">{usuario.nombre}</label>
                    <label className="usuarios-card__badge">
                        {usuario.rol}
                    </label>
                </div>
                <div className="usuarios-card__body">
                    <label className="usuarios-card__email">{usuario.correo}</label>
                </div>
                <div className="usuarios-card__actions">
                    <button className="usuarios-card__button--edit" onClick={() => handleEditUsuario()}><Pencil/>Editar</button>
                    <button className="usuarios-card__button--delete" onClick={() => handleDeleteUsuario()}><Trash/>Eliminar</button>
                </div>
            </div>
        </>
    )
}
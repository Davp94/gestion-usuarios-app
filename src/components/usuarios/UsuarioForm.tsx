import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuarios.response";
import { useEffect, useState } from "react";
interface UsuarioDetalleProps {
    usuario: UsuarioResponse | null
}
export const UsuarioForm = ({usuario}: UsuarioDetalleProps) => {
    
    const [usuarioFormData, setUsuarioFormData] = useState<UsuarioResponse>();

    const initComponent = async () => {
        if(usuario){
            setUsuarioFormData(usuario);
        }
    }

    useEffect(()=>{
        initComponent();
    },[])

    return (
        <>
            <form className="">
                <div>
                    <div>
                        <label>Nombre Completo</label>
                        <input type="text" required value={usuarioFormData?.nombre}/>
                    </div>
                </div>
                <div>
                     <div>
                        <label>Correo</label>
                        <input type="text" required value={usuarioFormData?.correo}/>
                    </div>
                </div>
                <div>
                     <div>
                        <label>Roles</label>
                        <input type="text" required value={usuarioFormData?.rol}/>
                    </div>
                </div>
                <div>
                    <button>Cancelar</button>
                    <button>{usuario ? 'Actualizar' : 'Crear'}</button>
                </div>
            </form>
        </>
    )
}
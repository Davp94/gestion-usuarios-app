import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuarios.response";
import { useEffect, useState } from "react";
import { Dropdown } from "../common/Dropdown";
interface UsuarioDetalleProps {
    usuario: UsuarioResponse | null
    onCancel: (modalOpen: boolean) => void
}
export const UsuarioForm = ({usuario, onCancel}: UsuarioDetalleProps) => {
    
    const [usuarioFormData, setUsuarioFormData] = useState<UsuarioResponse>();

    const initComponent = async () => {
        if(usuario){
            setUsuarioFormData(usuario);
        }
    }

    const rolOptions = [{value: 1, label: 'ADMIN'}, {value: 2, label: 'SUPERVISOR'}]

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
                        <label>Rol</label>
                        <Dropdown
                            value={usuarioFormData!.rol}
                            onChange={(value) => setUsuarioFormData({...usuarioFormData, rol: rolOptions.find(rol=>value===rol.value)?.label || ''})}
                            options={rolOptions}
                            placeholder="Seleccione un rol"
                        />
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
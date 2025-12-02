import { UsuarioCard } from "../components/usuarios/UsuarioCard";
import { useUserStore } from "../state-management/user.store";

export const UsuariosPage = () => {
    //let titulo = "MI APP USUARIOS"
    const {usuarios} = useUserStore();

    return (
        <>
            {/* renderizado de listas */}
            {usuarios.map((usuario, index) => (
                <UsuarioCard key={usuario.id} usuario={usuario}/>
            ))}
            <div></div>
            <div></div>
        </>
    )
}
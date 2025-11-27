import type { UsuarioRequest } from "../types/request/usuario.request";
import type { UsuarioResponse } from "../types/response/usuarios.response";

export class UsuarioService {

    public static async listarUsuarios(): Promise<UsuarioResponse[]> {
        //await obtenerUsuarios();
        // null;
    }

    public static async detalleUsuario(id: number): Promise<UsuarioResponse> {
        //await obtenerUsuarios();
        // null;
    }

    public static async crearUsuario(usuarioRequest: UsuarioRequest): Promise<UsuarioResponse> {
        //await obtenerUsuarios();
        // null;
    }

    public static async actualizarUsuario(usuarioRequest: UsuarioRequest): Promise<UsuarioResponse> {

    }

    public static async eliminarUsuario(id: number){

    }
}
import { create } from "zustand";
import type { UsuarioRequest } from "../types/request/usuario.request";
import type { UsuarioResponse } from "../types/response/usuarios.response";

interface UserState {
  usuarios: UsuarioResponse[];
  usuarioSelected: UsuarioResponse | null;
}

interface UsuarioActions {
  createUsuario: (usuarioRequest: UsuarioRequest) => void;
  updateUsuario: (id: number, usuarioRequest: UsuarioRequest) => void;
  deleteUsuario: (id: number) => void;
  listarUsuario: () => UsuarioResponse[];
  getUsuarioById: (id: number) => UsuarioResponse | null;
  setUsuarioSelected: (usuarioResponse: UsuarioResponse) => void;
  getUsuarioSelected: () => UsuarioResponse | null;
}

type UserStore = UserState & UsuarioActions;

export const useUserStore = create<UserStore>((set, get) => ({
  //Estado inicial
  usuarios: [
    { id: 1, nombre: "usuario 1", correo: "correo1@test.com", rol: "ADMIN" },
    { id: 2, nombre: "usuario 2", correo: "correo2@test.com", rol: "SIMPLE" },
    { id: 3, nombre: "usuario 3", correo: "correo3@test.com", rol: "SIMPLE" },
  ],
  usuarioSelected: null,
  createUsuario: (usuarioRequest) => {
    set((state) => ({
        usuarios: [...state.usuarios, {...usuarioRequest, id: state.usuarios.length+1}]
    }))
  },
  updateUsuario: (id, usuarioRequest) => {
    set((state)=> ({
        usuarios: state.usuarios.map((usuario)=>usuario.id === id ? {...usuario, ...usuarioRequest}: usuario)
    }))
  },
  deleteUsuario: (id) => {
    set((state)=> ({
        usuarios: state.usuarios.filter((usuario) => usuario.id !== id)
    }))
  },
  listarUsuario: () => {
    return get().usuarios;
  },
  getUsuarioById: (id) => {
    return get().usuarios.find((usuario)=>usuario.id === id) || null;
  },
  setUsuarioSelected: (usuarioResponse) => {
    set((state)=> ({
        usuarioSelected: usuarioResponse
    }))
  },
  getUsuarioSelected: () => {
    return get().usuarioSelected || null;
  }
}));

//queries // consultas // selectores
export const getSelectedUser = (state: UserStore) => state.usuarioSelected;
export const selectUserByRol = (rol: string) => (state: UserStore) => 
    state.usuarios.filter((usuario) => usuario.rol === rol);
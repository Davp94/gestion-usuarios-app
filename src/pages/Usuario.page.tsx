import { Plus } from "lucide-react";
import { UsuarioCard } from "../components/usuarios/UsuarioCard";
import { useUserStore } from "../state-management/user.store";
import { useState } from "react";
import { UsuarioForm } from "../components/usuarios/UsuarioForm";
import type { UsuarioResponse } from "../types/response/usuarios.response";
import { Modal } from "../components/common/Modal";

export const UsuariosPage = () => {
  //let titulo = "MI APP USUARIOS"
  const { usuarios } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [usuarioSelected, setUsuarioSelected] = useState<UsuarioResponse | null>(null);

  const openModal = (usuario: UsuarioResponse) => {
    setUsuarioSelected(usuario);
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setUsuarioSelected(null);
  }
  return (
    <>
      <div className="usuarios__header">
        <h1 className="usuarios__title">GEstion de Usuarios</h1>
        <button className="usuarios__add-button" onClick={() => setIsModalOpen(true)}>
          <Plus /> Agregar Usuario
        </button>
      </div>
      {/* renderizado de listas */}

      <div className="usuarios__list">
        {usuarios.map((usuario, index) => (
          <UsuarioCard key={usuario.id} usuario={usuario} setModalOpen={openModal}/>
        ))}
      </div>
      <div></div>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={usuarioSelected == null ? 'Crear usuario' : 'Editar usuario'}>
        <UsuarioForm usuario={usuarioSelected} onCancel={setIsModalOpen}/>
      </Modal>
    </>

  );
};

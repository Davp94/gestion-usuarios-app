import { useNavigate } from "react-router";
import type { UsuarioResponse } from "../../types/response/usuarios.response";
import { useEffect, useState } from "react";
import { Dropdown } from "../common/Dropdown";
import { useUserStore } from "../../state-management/user.store";
import { Controller, useForm } from "react-hook-form";
interface UsuarioDetalleProps {
  usuario: UsuarioResponse | null;
  onCancel: (modalOpen: boolean) => void;
}
export const UsuarioForm = ({ usuario, onCancel }: UsuarioDetalleProps) => {
  const { createUsuario, updateUsuario } = useUserStore();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UsuarioResponse>({
    defaultValues: {
      id: 0,
      nombre: "",
      correo: "",
      rol: "",
    },
  });

  const initComponent = async () => {
    console.log('USUARIO', usuario)
    if (usuario) {
     console.log('USUARIO ON IF', usuario)
      setValue('id', usuario.id)
      setValue('nombre', usuario.nombre)
      setValue('correo', usuario.correo)
      setValue('rol', usuario.rol)
    }
  };

  const rolOptions = [
    { value: 1, label: "ADMIN" },
    { value: 2, label: "SUPERVISOR" },
    { value: 3, label: "DEV" },
  ];

  const onSubmit = () => {
    const usuarioToSave = getValues();
    if (usuario) {
      updateUsuario(usuario.id, usuarioToSave);
    } else {
      createUsuario(usuarioToSave);
    }
  };

  useEffect(() => {
    initComponent();
  }, []);

  return (
    <>
      <form className="">
        <div>
          <div>
            <label>Nombre Completo</label>
            <input
              type="text"
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: {
                  value: 4,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "El nombre no puede exceder de 20 caracteres",
                },
              })}
            />
            {errors.nombre && <label>{errors.nombre.message}</label>}
          </div>
        </div>
        <div>
          <div>
            <label>Correo</label>
            <input
              type="text"
              {...register("correo", {
                required: "El correo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato de correo invalido",
                },
              })}
            />
            {errors.correo && <label>{errors.correo.message}</label>}
          </div>
        </div>
        <div>
          <div>
            <label>Rol</label>
            <label>{getValues().rol}</label>
            <Controller
              name="rol"
              control={control}
              rules={{ required: "El rol es requerido" }}
              render={({ field }) => (
                <Dropdown
                  value={field.value} //ADMIN
                  onChange={field.onChange}
                  error={errors.rol?.message}
                  options={rolOptions}
                  placeholder="Seleccione un rol"
                />
              )}
            />
            {/* <input
              type="text"
              {...register("rol", {
                required: "El rol es requerido",
              })}
            /> */}
          </div>
        </div>
        <div>
          <button onClick={() => onCancel(false)}>Cancelar</button>
          <button onClick={() => onSubmit()}>
            {usuario ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
    </>
  );
};

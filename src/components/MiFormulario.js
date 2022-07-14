import React from "react";
import { useForm } from "../hooks/useForm";

export const MiFormulario = () => {

  const {formulario, enviado, cambiado} = useForm({})

  

  return (
    <div>
      <h1>Formulario</h1>

      <pre className="codigo">{JSON.stringify(formulario)}</pre>

      <form className="mi-formulario" onSubmit={enviado}>
        <input
          type="text"
          name="titulo"
          onChange={cambiado}
          placeholder="Título"
        />
        <input
          type="number"
          name="anio"
          onChange={cambiado}
          placeholder="Año de publicación"
        />

        <textarea
          name="descripcion"
          onChange={cambiado}
          placeholder="descripcion"
        />

        <input
          type="text"
          name="autor"
          onChange={cambiado}
          placeholder="Autor"
        />

        <input
          type="email"
          name="email"
          onChange={cambiado}
          placeholder="Correo de contacto"
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

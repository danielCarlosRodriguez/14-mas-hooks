import React, { useState } from "react";

export const MiFormulario = () => {
  const [formulario, setFormulario] = useState({});

  //obtener todos los campos de formulario
  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    console.log("formData", formData);
    const objetoCompleto = {};
    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }
    return objetoCompleto;
  };


  const enviado = (e) => {
    e.preventDefault();
    //console.log(e.target);

    /*  //opción 1
    let curso = {
      titulo: e.target.titulo.value,
      anio: e.target.anio.value,
      descripcion: e.target.descripcion.value,
      autor: e.target.autor.value,
      email: e.target.email.value,
    };*/

    //opción 2
    serializarFormulario(e.target);
    let curso = serializarFormulario(e.target);

    setFormulario(curso);
  };

  //cada vez que haya un cambio en el formulario este se refleja
  const cambiado = ({target}) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]:value 
    })
  
}

  return (
    <div>
      <h1>Formulario</h1>

      <pre>{JSON.stringify(formulario)}</pre>

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

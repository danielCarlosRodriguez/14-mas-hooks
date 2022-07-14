import React, { useState } from "react";
import { useAjax } from "../hooks/useAjax";

export const MiUsuario = () => {
  
  const [url, setUrl] = useState("https://reqres.in/api/users/1");

  const { datos, cargando } = useAjax(url);

  const getId = (e) => {
    //console.log(e.target.value);
    let id = parseInt(e.target.value);
    setUrl("https://reqres.in/api/users/" + id);
  };

  return (
    <div>
      <h1>Usuario</h1>
      <p>Datos del usuario: </p>

      <input type="number" name="id" onChange={getId} />

      <p>{cargando ? "Cargando..." : ""}</p>
      {/* ?=si existe  */}
      <p>{datos?.id}</p>
      <p>{datos?.first_name}</p>
      <p>{datos?.last_name}</p>
      <p>{datos?.email}</p>
    </div>
  );
};

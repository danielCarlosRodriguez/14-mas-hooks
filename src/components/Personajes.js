import React from "react";
import { useAxios } from "../hooks/useAxios";

export const Personajes = () => {
  const { datos, cargando } = useAxios(
    "https://thronesapi.com/api/v2/Characters"
  );

  console.log(datos);
  console.log(cargando);

  return (
    <div className="datos">
      <h1>Datos conseguidos</h1>

      {datos.map((item, i) => {
        return (
          <div className="personaje" key={i}>
            {item.firstName}
          </div>
        );
      })}
    </div>
  );
};

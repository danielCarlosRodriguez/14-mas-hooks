import React from 'react'
import { useAxios } from "../hooks/useAxios";


export const Rse = () => {

  const { datos, cargando } = useAxios(
    "https://www.disco.com.uy/api/dataentities/BL/search?_fields=cuerpo,fecha,img_more,img_principal,titulo,date,resumen"
  );

  console.log(datos);
  console.log(cargando);

  return (
    <div className="datos">
      <h1>Datos conseguidos</h1>

      <p>{cargando ? "Cargando..." : ""}</p>

      {datos
        ? datos.map((item, i) => {
            return (
              <div className="dato" key={i}>
                <img className="imagen" src={item.img_principal} alt="a" /> -{" "}
                {item.titulo} - {item.date}
              </div>
            );
          })
        : "false"}
    </div>
  );
};

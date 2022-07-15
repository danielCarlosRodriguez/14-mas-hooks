import React from "react";
import { useAxios } from "../hooks/useAxios";

export const Usuarios = () => {
  const { datos, cargando } = useAxios("https://reqres.in/api/users?page=1");

 console.log(datos.data);
 console.log(cargando);



  return (
    <div className="datos">
      <h1>Datos conseguidos</h1>

      <p>{cargando ? "Cargando..." : ""}</p>

      
        {datos.data
          ? datos.data.map((item, i) => {
              return (
                <div className="dato" key={i}>
                  <img className="imagen" src={item.avatar} alt="a" /> -{" "}
                  {item.first_name} - {item.last_name}
                </div>
              );
            })
          : "false"}
     
    </div>
  );
};

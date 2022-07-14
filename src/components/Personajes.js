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
          <table className="default" key={i}>
            <thead>
              <tr>
                <td>
                  <img className="imagen" src={item.imageUrl} alt="a" />
                </td>
                <td> {item.image}</td>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td> {item.family}</td>
              </tr>
            </thead>
          </table>
        );
      })}
    </div>
  );
};

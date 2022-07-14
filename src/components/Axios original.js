import axios from "axios";
import React, { useEffect, useState } from "react";

export const Axios = () => {
  const [actores, setListadoActores] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const url = "https://thronesapi.com/api/v2/Characters";
      const result = await axios.get(url);
      //console.log(result.data);

      setListadoActores(result.data);
    };
    obtenerPersonajes();
  }, []);

  return (
    <div>
      <h1> Axios</h1>

      <ul>
        {actores.length === 0 && <p>Cargando...</p>}

        {actores.map((personas, i) => {
          return (
            <table className="default" key={i}>
              <thead>
                <tr>
                  <td>
                    <img className="imagen" src={personas.imageUrl} alt="a" />
                  </td>
                  <td> {personas.image}</td>
                  <td>
                    {personas.firstName} {personas.lastName}
                  </td>
                  <td> {personas.family}</td>
                </tr>
              </thead>
            </table>
          );
        })}
      </ul>
    </div>
  );
};

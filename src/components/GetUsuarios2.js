import React, { useState, useEffect } from "react";
import { useAjax } from "../hooks/useAjax";

export const GetUsuarios2 = () => {
  const [url, setUrl] = useState("https://reqres.in/api/unknown");

  // eslint-disable-next-line no-unused-vars
  const { datos, cargando } = useAjax(url);
  const [count, setCount] = useState(0);


    const getId = (e) => {
      console.log(parseInt(e.target.value));
      setCount(parseInt(e.target.value));
    };

  useEffect(() => {
      setUrl("https://reqres.in/api/unknown");
     
  }, [url]);

  console.log("mis datos =>> ", datos);

  //console.log("mis datos =>> ", datos[1].name);

  return (
    <div className="get">
      <h1>GetUsuarios2</h1>
      <p>
        {cargando
          ? "Cargando..."
          : datos.map((dato, i) => {
              return (
                <div className="dato" key={i}>
                  {dato.id} - {dato.name} - {dato.year} - {dato.color} -{" "}
                  {dato.pantone_value}
                </div>
              );
            })}
      </p>
      <input type="number" name="id" onChange={getId} /> <br />
      <span>El contador está a {count}</span>
      {/* {datos.filter((item, index) => index === 1)} */}
    </div>
  );
};

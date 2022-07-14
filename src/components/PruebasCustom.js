import React from "react";
import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {

  const { estado, mayusculas, minusculas, concatenar } =
    useMayus("daniel rodriguez");



  return (
    <div>
      <h1>Probando nuevo hooks useMayus</h1>
      {estado}
      <br />
      <button onClick={mayusculas}>Mayúsculas</button>
      &nbsp;
      <button onClick={minusculas}>Minúsculas</button>
      <br />
      &nbsp;
      <button onClick={e => concatenar(" hola")}>Concatenar</button>
      <br />
    </div>
  );
};

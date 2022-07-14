import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
  });

  const getData = async () => {
    const result = await axios.get(url);
    //console.log(result.data);

    setEstado({
      datos: result.data,
      cargando: false,
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    datos: estado.datos,
    cargando: estado.cargando,
  };
};

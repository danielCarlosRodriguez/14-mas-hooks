import { useState, useEffect } from "react";

export const useAjax = (url) => {


  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
  });

    
    
    
    const getData = async () => {
      
        setEstado({
        ...estado,
        cargando: true,
        });
            

        const peticion = await fetch(url);
        const { data } = await peticion.json();
        //console.log(data);

        setEstado({
        datos: data,
        cargando: false,
        });
    };
    


  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

    
    
    
    return {
        datos: estado.datos,
        cargando: estado.cargando
  }
};

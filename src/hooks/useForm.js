import { useState } from "react";

export const useForm = (objetoInicial = {}) => {


     const [formulario, setFormulario] = useState(objetoInicial);

  //obtener todos los campos de formulario
  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    console.log("formData", formData);
    const objetoCompleto = {};
    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }
    return objetoCompleto;
  };


  const enviado = (e) => {
    e.preventDefault();
  
    serializarFormulario(e.target);
    let curso = serializarFormulario(e.target);

      setFormulario(curso);
      
      document.querySelector(".codigo").classList.add("enviado")
  };

  //cada vez que haya un cambio en el formulario este se refleja
  const cambiado = ({target}) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]:value 
    })
  
    }
    

    return {
        formulario,
        enviado,
        cambiado
    }
    

    
};

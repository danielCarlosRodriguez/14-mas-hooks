import React, { useId } from 'react'

export const useCustomId = () => {

  const id = useId();

  console.log(id);

  return (
    <div>
      <h1>Hook useId</h1>
      <input type="id" id={id} placeholder="nombre" />
    </div>
  );
};

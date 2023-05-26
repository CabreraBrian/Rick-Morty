import { useEffect, useState } from "react";

//useState es un array, contiene el estado y la funcion seteadora, se setea el valor por defecto
//useEffect controla el ciclo de vida del componente

const ContadorFuncional = () => {
  const [counter, setCounter] = useState(0);

  const aumentar = () => {
    setCounter(counter + 1);
  };
  const decrementar = () => {
    counter && setCounter(counter - 1);
  };
  const reiniciar = () => {
    setCounter(0);
  };

  useEffect(()=>{
    console.log("Me monte");
    return console.log("me desmonte");
  },[counter])

  return (
    <div>
      <h1>Componente Funcional</h1>
      <p>{counter}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export {ContadorFuncional};

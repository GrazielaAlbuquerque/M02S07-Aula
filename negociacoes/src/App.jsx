import React, { useEffect, useState } from "react";
import Formulario from './components/Formulario';
import ListaNegociacoes from "./components/ListaNegociacoes";
import { Negociacao } from "./models/negociacao";


function App() {
  const [negociacoes, setNegociacoes] = useState([]);

  const onSubmit = (data, quantidade, valor) => {
    let negociacao = new Negociacao(data, quantidade, valor);
    setNegociacoes([...negociacoes, negociacao]);
  };

  useEffect(() => console.log(negociacoes), [negociacoes]); 

  return (
    <div className="container">
      <h1 className="text-center mb-4">Lista de negociações</h1>
      <Formulario onSubmit={onSubmit}/>
      <h2>Lista de negociações</h2>
      <ListaNegociacoes negociacoes={negociacoes} />
    </div>
  );
}

export default App


//CÓDIGO ORIGINAL
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

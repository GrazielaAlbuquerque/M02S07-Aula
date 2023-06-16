import React, {useState} from 'react';
import propTypes from 'prop-types';

function Formulario({onSubmit}) {
    const[data, setData] = useState('');
    const[quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const handleSumit = (evento) => {
        evento.preventDefault(); // preventDefault evita que a pagina seja recarregada na submissão
        onSubmit(data,quantidade,valor);
    };
    
    return(
        <form className='form' onSubmit={handleSumit}>
            <div className='rb-3'>
               <label htmlFor='data' className='form-label'>Data</label>
                <input type='date' className='form-control' id="data" value={data} onChange={(evento)=>setData(evento.target.value)}/>
            </div>
            <div className='rb-3'>
                <label htmlFor='form-label'>Quantidade</label>
                <input type='number' className='form-control' id="quantidade" value={quantidade} onChange={(evento)=>setQuantidade(evento.target.value)}/>
            </div>

            <div className='rb-3'>
                <label htmlFor='valor' className='form-label'>Valor</label>
                <input type='number' className='form-control' id="valor" min={0.01} max={10000000000} step={0.01} value={valor} onChange={(evento)=> setValor(evento.target.value)}/>
            </div>

            <button className='pimary'type="submit">Cadastrar</button>
        </form>
    )

}
Formulario.PropTypes = {
    onSubmit: propTypes.func
  };

export default Formulario;



// import React, { userState } from "react";
// import propTypes from 'prop-types';

// function Formulario({onSubmit}) {
//     const [data, setData] = userState('');
//     const [quantidade, setQuantidade] = userState('');
//     const [valor, setValor] = userState('');
//     const handleSumit = (evento) => {
//         evento.preventDefaut();
//         onSubmit(data, quantidade, valor);
//     };
//     return (
//     <form className="form" onSubmit={handleSumit}>
//     <div className="mb-3">
//         <label htmlFor="data" className="form-label">Data</label>
//         <input type="date" className="form-control" id="data" value={data} 
//             onChange={(evento) => setData(evento.target.value)}/>
//     </div>
//     <div className="mb-3">
//         <label htmlFor="quantidade" className="form-label">Quantidade</label>
//         <input type="number" className="form-control" id="quantidade" value={quantidade} 
//             onChange={(evento) => setQuantidade(evento.target.value)}/>
//     </div>
//     <div className="mb-3">
//         <label htmlFor="valor" className="form-label">Valor</label>
//         <input type="number" className="form-control" id="valor" min={0.01} max={1000000000}
//             step={0.01} value={valor} onChange={(evento) => valor[1](evento.target.value)}/>
//     </div>
// <button className="primary" type="submit">Cadastrar</button>
//         </form>
//     );
// }

//     Formulario.PropTypes = {
//         onSubmit: propTypes.func
//       };

// export default Formulario;


// //CÓDIGO COMPLETO
// import React, { userState } from "react";

// function Formulario(props) {
//     const [data, setData] = userState('');
//     const [quantidade, setQuantidade] = userState('');
//     const estadovalor = userState('');
//     return (
// <form className="form">
//     <div className="mb-3">
//         <label htmlFor="data" className="form-label">Data</label>
//         <input type="date" className="form-control" id="data" value={data} 
//             onChange={(evento) => setData(evento.target.value)}/>
//     </div>
//     <div className="mb-3">
//         <label htmlFor="quantidade" className="form-label">Quantidade</label>
//         <input type="number" className="form-control" id="quantidade" value={quantidade} 
//             onChange={(evento) => setQuantidade(evento.target.value)}/>
//     </div>
//     <div className="mb-3">
//         <label htmlFor="valor" className="form-label">Valor</label>
//         <input type="number" className="form-control" id="valor" min={0.01} max={1000000000}
//             step={0.01} value={estadovalor[0]} onChange={(evento) => estadovalor[1](evento.target.value)}/>
//     </div>
// <button className="primary" type="submit">Cadastrar</button>
//         </form>
//     );
// }

// export default Formulario;
import { useState } from "react";
import axios from 'axios';
import "./styles.css";
 
//--------------------------------------------------
export default function App(props) {
  const[ usuario, setUsuario ] = useState('');
   function handlePesquisa(){
     axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));
   }
    return (  
     
     
//<----------- não apague as linaha acima --------------------------->     
   < >
      
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa} >pesquisar</button>
     
   </>



/*<------------- não apague as linhas abaixo --------------------> */
  ); 
}

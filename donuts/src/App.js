import StyledGlobal, { CorFundo } from "./styledGlobal";
import { useState } from "react";

function App() {
  const [trocarDePagina, setTrocarDePagina] = useState()

  const changePage = () =>{
    setTrocarDePagina()
  }

  return (
   <>
   <CorFundo>
    <StyledGlobal/>
      {trocarDePagina === 0 ?(
        <Home
        pagina={()=>changePage(1)}/>
      ):(
        <Detalhes
        pagina={()=>changePage(0)}/>
      ) }



   </CorFundo>
   </> 
  );
}

export default App;

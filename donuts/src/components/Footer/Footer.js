import { FooterContainer } from "./styles"
import { ImagemMais } from "./styles"
import historico from "../../assets/historico.png"
import promocao from "../../assets/promocao.png"
import mais from "../../assets/mais.png"
import carinho from "../../assets/carinho.png"
import coracao from "../../assets/coracao.png"

function Footer() {
    return (
        <>
        <FooterContainer>
        <img  src={historico}/>
        <img  src={promocao}/>
        {/* <img  src={mais}/> */}
        <ImagemMais src={mais}/>
        <img  src={carinho}/>
        <img  src={coracao}/>
        </FooterContainer> 
        </>
    )
}

export default Footer
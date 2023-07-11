import { ContainerButton } from "./styles"
function Botao(props){
    return(
        <ContainerButton>
            {props.titulo}
        </ContainerButton>
    )
}
export default Botao
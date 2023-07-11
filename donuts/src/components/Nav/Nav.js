import { ContainerNav } from "./styles"
import { ContainerButton } from "../Botao/styles"
import filtro from "../../assets/filtro.png"

function Nav(){
    return(

        <ContainerNav>
            <ContainerButton titulo={"Donuts"}/>
            <ContainerButton titulo={"Ice Cream"}/>
            <ContainerButton titulo={"Bomboloni"}/>
            <img src={filtro}/>
        </ContainerNav>
    )

}
export default Nav
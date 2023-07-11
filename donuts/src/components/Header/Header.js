import { HeaderContainer, BotaoNavegacao } from "./styled"
import menu from "../../assets/menu.png"

function Header(props) {

    const handlePageChange=()=>{
        props.pagina()
    }
    return (
        <HeaderContainer>
            <BotaoNavegacao onClick={handlePageChange}>
                <img src={menu} alt="aa"/>
            </BotaoNavegacao>
            <BotaoNavegacao> 
                <img src={menu} alt="aa"/>
            </BotaoNavegacao>
        </HeaderContainer> 
    )
}

export default Header
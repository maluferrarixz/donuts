import { SectionCard } from "./styles"
import Card from "../../components/Card/Card"
import Nav from "../../components/Nav/Nav"
import Header from "../../components/Header/Header"

function Home(props) {
    return(
        <>
        <Header
        pagina = {props.pagina}/>
            <Nav/>
            <SectionCard>
                <Card/>
            </SectionCard>

        </>
    )
}

export default Home 
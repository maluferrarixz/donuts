import { BotaoAddCard, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextNumber, TextoDonuts, TituloDonuts, BotaoMore, TextMore} from "./styles"
import Header from "../../components/Header/Header"

function Details(props) {
    return(
        <>
        <Header
        pagina = {props.pagina}/>
        <ContainerDetalhes>
            <ImagemGrande src=""/>
            <ContainerDiv>
                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                <TextoDonuts>
                    A fluffy fresh cooked donut covered bya a creamy strawberry flavour with a rainbow sprinkles
                </TextoDonuts>
                <MaisProdutos>
                    <img src=""/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Need more?</TextMore>
                    <BotaoMore>Add more</BotaoMore>
                </MaisProdutos>

                <BotaoAddCard>Add to card</BotaoAddCard>
            </ContainerDiv>
        </ContainerDetalhes>
        </>
    )
}

export default Details
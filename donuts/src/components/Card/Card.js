import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styled";
import donutsUnicorn from "../../assets/donut 1.png"

function Card() {

    return(
        <CardContainer>
            <ImagemCard src={donutsUnicorn}/>
                <TituloCard>
                    Unicorn Sprinkless
                </TituloCard>

                <TextCard>
                    Strawberry creamy ...
                </TextCard>

                <DivCard>
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard>
        </CardContainer>
    )

}

    export default Card
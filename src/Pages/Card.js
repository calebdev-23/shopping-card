import {CardCard} from "../component";
import {UseTitle} from "../hooks/UseTitle";
import {useCard} from "../context/ContextCard";
export const Card = () =>{
    UseTitle("Card")
    const {cardList, totale} = useCard()
    return (<div className={"myCard"}>
        <div className={"text-center fw-bold mb-3 fs-3"}>Cart Items : {cardList.length}/${totale}</div>
        {
            cardList.map((product)=>( <CardCard product={product} key={product.id}/>))
        }

    </div>)
}
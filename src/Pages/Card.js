import {CardCard} from "../component";
import image1 from "../assets/shops/shops-1.png";
import image2 from "../assets/shops/shops-2.png";
import {UseTitle} from "../hooks/UseTitle";
import {useCard} from "../context/UseContext";
export const Card = () =>{
    UseTitle("Card")
    const{cardList, totale} = useCard()
    return (
        <div className={"myCard"}>
            <div className={"text-center fw-bold fs-4"}>cart items : {cardList.length}\${totale}</div>
        {
            cardList.map((product)=>( <CardCard key={product.id} product={product}/>))
        }

    </div>)
}
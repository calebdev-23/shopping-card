
import {useCard} from "../context/UseContext";
import {useEffect, useState} from "react";
export const ProductCard = ({product}) =>{
    const {addToCard, cardList, removeToCard } = useCard()
    const [isInCart, setIsInCart] = useState(false)
    const {description, image, name, price, id} = product
    useEffect(()=>{
        const isInCartList = cardList.find((product)=> product.id === id)
        if(isInCartList){
            setIsInCart(true)
        }
        else{
            setIsInCart(false)
        }
    },[cardList, id])

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 ">
            <div className={"card shadow"}>
                <div className={"text-center"}>
                    <img src={image} alt="w-25" className={"w-50 "}/>
                </div>
                <div className={"card-body pt-0"}>
                    <p className={"fw-semibold mb-0"}>{name}</p>
                    <p>
                        {description}
                    </p>
                    <div className={"d-flex justify-content-between align-items-center flex-sm-wrap"}>
                        <span className={"fs-5 fw-bold"}>${price} </span>
                        {
                            isInCart ?
                                <button className={"btn btn-danger btn-sm"} onClick={()=>removeToCard(product)}>Remove</button>
                                :
                                <button className={"btn btn-primary btn-sm"} onClick={()=>addToCard(product)}>Add to Card</button>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}
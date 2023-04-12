import {createContext, useContext, useReducer} from "react";
import {cardReducer} from "../reducer/useReducer";

const initialState = {
    cardList: [],
    totale : 0
}
const cardContext = createContext(initialState)
export const CardProvider = ({children}) => {
    const [state, dispatch] = useReducer(cardReducer,initialState);
    const addToCard = (product) =>{
        const cardListUpdate = state.cardList.concat(product)
        totalePrice(cardListUpdate)
        dispatch({
            type : "ADD_TO_CARD",
            paylod:{
                products : cardListUpdate
            }
        })
    }
    const removeToCard = (product) =>{
        const cardListUpdate = state.cardList.filter((current)=>current.id !== product.id)
        totalePrice(cardListUpdate)
        dispatch({
            type : "REMOVE_FROM_CARD",
            paylod:{
                products : cardListUpdate
            }
        })
    }
    const totalePrice = (products) =>{
        let total = 0
        products.forEach((product)=> total = total + product.price)
        dispatch({
            type : "UPDATE_TOTAL",
            paylod:{
                total
            }
        })

    }

    const value = {
      cardList: state.cardList,
      totale : state.totale,
        addToCard,
        removeToCard,
        totalePrice
    }
    return (
        <cardContext.Provider value={value}>
            {children}
        </cardContext.Provider>
    )
}
export const useCard = () =>{
    return useContext(cardContext)
}
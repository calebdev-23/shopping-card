import {createContext, useContext, useReducer} from "react";
import {reducer} from "../reducer/reducerCard";

const initialState = {
    cardList : [],
    totale : 0
}
export const CardContext  = createContext(initialState)
export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCard = (product) =>{
        const cardListUpdate = state.cardList.concat(product)
        totalePrice(cardListUpdate)
        dispatch({
            type : "ADD_TO_CARD",
            paylod: {
                products : cardListUpdate,
            }
        })
    }
    const removeFromCard = (product) => {
        const cardListUpdate = state.cardList.filter((prod)=> prod.id !== product.id)
        totalePrice(cardListUpdate)
        dispatch({
            type : "DELETE_FROM_CARD",
            paylod: {
                products : cardListUpdate,
            }
        })
    }
    const totalePrice = (products) =>{
        let total = 0
        products.forEach((product)=> total = total + product.price)
        dispatch({
            type : "UPDATE_TOTALE",
            paylod:{
                total
            }
        })
    }
    const value = {
        cardList: state.cardList,
        totale: state.totale,
        addToCard,
        removeFromCard
    }
    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}
export const useCard = () =>{
    return useContext(CardContext)
}
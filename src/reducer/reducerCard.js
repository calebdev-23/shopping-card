export const reducer =(state, action)=>{
    const {type, paylod} = action
    switch (type) {
        case "ADD_TO_CARD" :
            return {...state, cardList : paylod.products}
        case "DELETE_FROM_CARD" :
            return {...state, cardList : paylod.products}
        case "UPDATE_TOTALE" :
            return {...state, totale: paylod.total}
    }
}
export const cardReducer = (state, action ) =>{
    const {type, paylod} = action
    switch (type) {
        case "ADD_TO_CARD" :
            return {
                ...state, cardList : paylod.products
            }
        case "REMOVE_FROM_CARD" :
            return {
                ...state, cardList : paylod.products
            }
        case "UPDATE_TOTAL" :
            return {
                ...state, totale : paylod.total
            }
    }
}
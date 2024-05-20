const initialState = {
    isAuth : false,
    prodCount : 0
}

export const ProdReducer = (state = initialState , action)=>{
    switch(action.type){
        case "ADDPRODUCT":
            return{initialState:true}
        default:
            console.log("Product reducer reset");
            return state
    }
}
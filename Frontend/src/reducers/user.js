const initialState = {
    isAuth : false,
    userCount : 0,

}

export const UserReducer = (state = initialState , action)=>{
    switch(action.type){
        case "ADDUSER":
            return{initialState:true}
        // case "USER_COUNT":
        //     console.log("Length in userReducer = ",action.payload);
        //     return{...state, userCount: action.payload}
        default:
            console.log("User reducer reset");
            return state
    }
}
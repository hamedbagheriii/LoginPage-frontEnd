import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_RESPONSE } from "./userType";

const initialState = {
    isLoading : true,
    userData : null,
    errorMessage : null
}



const userReducer = (state = initialState , action : any)=>{
    switch (action.type) {
        case GET_USER_LOADING:
            return {...state , isLoading : true}    
        break;
    
        case GET_USER_RESPONSE:
            return {...state , isLoading : false , userData : action.payload}
        break;

        case GET_USER_ERROR:
            return {...state , isLoading : false , errorMessage : action.payload , userData : null}
        break;

        default:
            return state;
        break;
    }
}


export default userReducer;
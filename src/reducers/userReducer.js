import { SIGNINRESPONSE } from '../constants/index'

function userReducer (state = null , action ){
    switch(action.type){
        case SIGNINRESPONSE : return {
            ...action.user,
        }
        default: return state;

    }
} 
export default userReducer;
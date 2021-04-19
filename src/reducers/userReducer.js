import {SIGNIN } from '../constants/index'

function userReducer (state = null , action ){
    switch(action.type){
        case SIGNIN : return {
            ...action.user
        }
        default: return state;

    }
} 
export default userReducer;
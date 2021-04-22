import {ADDNOTE , GETNOTES , UPDATENOTE } from '../constants/index'

function notesReducer (state = [] , action ){
    switch(action.type){
        case ADDNOTE : return [...action.note ] ;
        case GETNOTES : return [...action.notes];
        case UPDATENOTE : return {...action.updatedNote};

        default: return state;

    }
} 
export default notesReducer;
import {ADDNOTE , GETNOTES } from '../constants/index'

function notesReducer (state = [] , action ){
    switch(action.type){
        case ADDNOTE : return [...action.note ] ;
        case GETNOTES : return [...action.notes];
        default: return state;

    }
} 
export default notesReducer;
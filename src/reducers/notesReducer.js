import {ADDNOTE , GETNOTES } from '../constants/index'

function notesReducer (state = [] , action ){
    switch(action.type){
        case ADDNOTE : return [...action.note , ...state] ;
        case GETNOTES : return [...action.note];
        default: return state;

    }
} 
export default notesReducer;
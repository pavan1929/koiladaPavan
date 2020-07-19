import {actionTypes, newAction} from './action';
import { user } from './user';

const initialState:user= {id:1,name:"PAvan"};
const newState = (state,newData)=>{
    return Object.assign({},state,newData);
}


export function userReducer(state:user = initialState, action:newAction):user{
    switch (action.type){
        case actionTypes.update:
            return newState(state,action.payload);
        default:
            return state;
    }
}
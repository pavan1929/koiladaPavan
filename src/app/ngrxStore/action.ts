import {Action} from '@ngrx/store';
import {user} from './user';

export const enum actionTypes  {
    update="[post Component] update"
}
export class newAction implements Action{
    readonly type:any;
    payload:any;
}

export class userUpdate implements newAction{
    readonly type= actionTypes.update;
    constructor (public payload:user){}
}
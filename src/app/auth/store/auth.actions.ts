import {Action} from '@ngrx/store'
export const LOGIN='LOGIN';
export const LOGOUT='LOGOUT';

export class Login implements Action {
    readonly type=LOGIN;
    constructor(public payload :{user:string,email:string,userId:string,expirationDate:Date}){
        
    }
}
export class Logout implements Action {
    readonly type=LOGOUT;
}
export type AuthActions=Login | Logout;

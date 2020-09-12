import { User } from '../auth/user.model';
import * as fromAuth from '../auth/store/auth.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface appState{
    auth :fromAuth.State
}
export const  appReducer : ActionReducerMap<appState>={
    auth:fromAuth.authReducer
}
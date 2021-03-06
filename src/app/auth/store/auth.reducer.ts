import { User } from "../user.model";
import * as AuthActions from './auth.actions'

export interface State {
    user: User
}
const intialState: State = {
    user: null
}
export function authReducer(state = intialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.LOGIN:
            const user = new User(
                action.payload.user,
                action.payload.email,
                action.payload.userId,
                action.payload.expirationDate);
            return {
                ...state,
                user
            }
        case AuthActions.LOGOUT:
            return {
                ...state,
                user:null
            }

        default:
            return state;
    }
}


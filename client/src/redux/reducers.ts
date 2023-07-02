import { SET_USER_DATA } from './actions';

const initialState = {
    user: null
};

interface ActionType {
    type: string;
    payload?: any;
}


export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

import { ADD, DELETE, EDIT } from "./user.constant";
import { initialState } from "./user.state";

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return ({ ...state, clients: [...state.clients, action.payload] })
        case DELETE:
            return ({ ...state, clients: state.clients.filter(item => item.id !== action.payload) })
        case EDIT:
            let index = state.clients.findIndex(item => item.id === action.payload.id)
            let newState = [...state.clients]
             newState[index] = action.payload.option
            return { ...state , clients: newState}
        default:
            return state;
    }
}
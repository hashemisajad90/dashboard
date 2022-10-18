import { ADD, DELETE } from "./user.constant";
import { initialState } from "./user.state";

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return( { ...state, clients: [...state.clients, action.payload] })
            case DELETE:
            return( { ...state, clients: state.clients.filter(item=> item.id !== action.payload) })
        default:
            return state;
    }
}
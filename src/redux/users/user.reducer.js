import { ADD, DELETE, EDIT, SEARCH } from "./user.constant";
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
            return { ...state, clients: newState }
        case SEARCH:
            if (action.payload.length === 0 && action.payload == "") {
                return { ...state, clients: [...state.clients] }
            }
            console.log(action.payload);
            return { ...state, clients: action.payload }
        default:
            return state;
    }
}
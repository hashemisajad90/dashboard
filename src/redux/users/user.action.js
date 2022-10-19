import { type } from "@testing-library/user-event/dist/type";
import { ADD, DELETE, EDIT, SEARCH } from "./user.constant";

export function add(userInformation) {
    return {
        type: ADD,
        payload: userInformation,
    }
};

export function deleted(id) {
    return {
        type: DELETE,
        payload: id,
    }
}
export function edit(id , options) {
    return{
        type: EDIT,
        payload: {
            id:id,
            option:options,
        },
    }
}

export function search(searchObj) {
    return{
        type: SEARCH,
        payload: searchObj,
    }
}

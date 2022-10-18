import { ADD, DELETE } from "./user.constant";

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
    };
}
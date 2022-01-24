// import {state} from "./state";

export const mutations = {
    ADD: (state, newTodo) => state.todos.push(newTodo),
    UPDATE: (state, payload) => state.todos[payload.i] = payload.newState,
    DELETE: (state, i) => state.todos.splice(i, 1),
    // RESET: (state) => state = []
};
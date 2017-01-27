import { 
    ADD_TODO, 
    EDIT_TODO, 
    DELETE_TODO, 
    TOGGLE_TODO, 
    TOGGLE_STAR, 
    SET_VISIBILITY_FILTER 
} from '../constants'

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function editTodo(text, id) {
    return {
        type: EDIT_TODO,
        text,
        id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function toggleStar(id) {
    return {
        type: TOGGLE_STAR,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

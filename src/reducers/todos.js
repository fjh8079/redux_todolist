import { 
    ADD_TODO, 
    EDIT_TODO, 
    DELETE_TODO, 
    TOGGLE_TODO, 
    TOGGLE_STAR, 
    SET_VISIBILITY_FILTER 
} from '../constants'

if (!Date.now) {
    Date.now = function() {
        return new Date().getTime();
    }
}

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: Date.now(),
                text: action.text,
                completed: false,
                stared: false
            }
            break;

        case EDIT_TODO:
            if (state.id == action.id) {
                return {
                    id: state.id,
                    text: action.text,
                    completed: state.completed,
                    stared: state.stared
                }
            } else {
                return state
            }
            break;

        case DELETE_TODO:
            if (state.id !== action.id) {
                return state
            }
            break;

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            } else {
                return Object.assign({}, state, {
                    completed: !state.completed
                })
            }
            break;

        case TOGGLE_STAR:
            if (state.id !== action.id) {
                return state
            } else {
                return Object.assign({}, state, {
                    stared: !state.stared
                })
            }
            break;

        default:
            return state
            break;
    }
}

let savedTodos = [];

if(localStorage.todos) {
    savedTodos = JSON.parse(localStorage.todos);
}

const todos = (state = savedTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
            break;

        case EDIT_TODO:
            return state.map(t =>
                todo(t, action)
            )
            break;

        case DELETE_TODO:
            return state.filter(t =>
                t.id !== action.id
            )
            break;

        case TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            )
            break;

        case TOGGLE_STAR:
            return state.map(t =>
                todo(t, action)
            )
            break;

        default:
            return state
            break;
    }
}

export default todos

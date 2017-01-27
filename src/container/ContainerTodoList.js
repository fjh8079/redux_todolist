import { VisibilityFilters } from '../constants'
import { connect } from 'react-redux'
import { toggleTodo, toggleStar, deleteTodo, editTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
            break;
        case VisibilityFilters.SHOW_STARED:
            return todos.filter(t => t.stared)
            break;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed === true)
            break;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => t.completed === false)
            break;
        default: 
            return todos
            break;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, ownProps.showType),
        showType: ownProps.showType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onStarClick: (id) => {
            dispatch(toggleStar(id))
        },
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        },
        onListEdit: (text, id) => {
            dispatch(editTodo(text, id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

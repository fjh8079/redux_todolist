import React from 'react';
import List from './List'

class TodoList extends React.Component {

    render() {

        if( this.props.todos.length>0 ) {
            return (
                <div className="content">
                    <ul className="todolist">
                        { 
                            this.props.todos.map( todo => 
                                <List 
                                key={ todo.id } 
                                { ...todo }
                                onComplete={() => this.props.onTodoClick(todo.id)}
                                onStar={() => this.props.onStarClick(todo.id)}
                                onDelete={() => this.props.onDeleteClick(todo.id)}
                                onSaveEdit={(text) => this.props.onListEdit(text, todo.id)} />
                            ) 
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="noData">Oops, You got nothing to do.</div>
            )
        }

    }

}

export default TodoList;
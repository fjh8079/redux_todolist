import React from 'react';
import ContainerTodoList from '../container/ContainerTodoList';

class All extends React.Component {

    render() {
        
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        let showType = ''
        switch (this.props.route.path) {
	        case '':
	            showType = 'SHOW_ALL'
	            break;
	        case 'Stared':
	            showType = 'SHOW_STARED'
	            break;
	        case 'Completed':
	            showType = 'SHOW_COMPLETED'
	            break;
	        case 'Active':
	            showType = 'SHOW_ACTIVE'
	            break;
	        default: 
	            showType = 'SHOW_ALL'
	            break;
	    }
        return (
            <ContainerTodoList showType={ showType } />
        )
    }

}

export default All;
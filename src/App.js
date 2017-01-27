import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import TodoInput from './components/todoInput';
import ContainerHeader from './container/ContainerHeader';

// stylesheet
require('../assets/stylesheets/app.scss');
require('../assets/fonts/fontcustom.css');

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

export class App extends React.Component {

    componentWillMount() {
        const { dispatch } = this.props;

        let pathname = this.props.location.pathname

        let filterType;

        switch (pathname) {

            case '/stared':
                filterType = 'SHOW_STARED';
                break;

            case '/completed':
                filterType = 'SHOW_COMPLETED';
                break;

            case '/active':
                filterType = 'SHOW_ACTIVE';
                break;

            case '/':
                filterType = 'SHOW_ALL';
                break;

        }
        dispatch(setVisibilityFilter(filterType))
    }

    componentDidMount() {
        this._handleScroll();
    }

    _handleScroll() {

        let topDiv = document.getElementById('top-div');
        let todoDiv = document.getElementById('todos-div');
        let todoTabs = document.querySelector('#top-div .content .tabs');
        let topDivOffset = topDiv.offsetTop;
        let topDivHeight = topDiv.offsetHeight;

        window.onresize = function(event) {
            topDivHeight = topDiv.offsetHeight;
        }

        window.addEventListener('scroll', function(event) {
            var scrollTop = event.target.scrollingElement.scrollTop;
            if(scrollTop >= topDivOffset) {
                if(!hasClass(topDiv, 'fixed')) {
                    topDiv.className += ' fixed';
                    todoDiv.style.marginTop = topDivHeight+'px';
                    todoTabs.style.backgroundColor = '#FFF';
                }
            } else {
                topDiv.className = '';
                todoDiv.style.marginTop = '';
                todoTabs.style.backgroundColor = 'transparent';
            }
        })
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <div className="header">
                    <div className="logo">TODO</div>
                </div>
                <span id="top-div">
                    <div className="content top-div">
                        <ContainerHeader
                            currentPath = { this.props.location.pathname }
                            onFilterClick = { nextFilter => dispatch(setVisibilityFilter(nextFilter)) } />
                        <TodoInput addItem={text => dispatch(addTodo(text))} />
                    </div>
                </span>
                <div id="todos-div">
                    { this.props.children }
                </div>
            </div>
        );
    }

}

export default connect()(App)

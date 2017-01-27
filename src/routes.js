import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import TodoList from './components/TodoList';
import All from './components/All';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={All}/>
		<Route path="Stared" component={All}/>
		<Route path="Active" component={All}/>
		<Route path="Completed" component={All}/>
	</Route>
)

export default routes

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import routes from './routes'

import * as reducers from './reducers'


const reducer = combineReducers({
	...reducers,
	routing: routerReducer
})

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
		<LogMonitor theme="tomorrow" preserveScrollTop={false} />
	</DockMonitor>
)

const store = createStore(
	reducer,
	DevTools.instrument()
)



let unsubscribe = store.subscribe(() => {
	localStorage.todos = JSON.stringify(store.getState().todos);
})

const history = syncHistoryWithStore(browserHistory, store)


render(
	<Provider store={store}>
		<div>
			<Router history={history}>
                { routes }
            </Router>
            <DevTools />
		</div>
	</Provider>,
	document.getElementById('todo-app')
)
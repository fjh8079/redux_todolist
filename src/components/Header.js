import React from 'react';
import { browserHistory } from 'react-router';

class Header extends React.Component {

	_handleClick(type) {
		this.props.onFilterClick(type)
	}

	isActive(value) {
	    let path = this.props.currentPath;
	    return 'tab ' + ((value === path) ? 'active' : '');
	}

	render() {
		return (
		    <ul className="tabs">
		        <a href="/" onClick={(e) => this._handleClick('SHOW_ALL')}><li className={this.isActive('/')}>All</li></a>
		        <a href="/stared" onClick={(e) => this._handleClick('SHOW_STARED')}><li className={this.isActive('/stared')}>Starred</li></a>
		        <a href="/active" onClick={(e) => this._handleClick('SHOW_ACTIVE')}><li className={this.isActive('/active')}>Active</li></a>
		        <a href="/completed" onClick={(e) => this._handleClick('SHOW_COMPLETED')}><li className={this.isActive('/completed')}>Complete</li></a>
		    </ul>
	    );
	}

};

export default Header;

import React from 'react';

class List extends React.Component {

	_handleEditText() {
		const node = this.refs.content
        const text = node.value.trim()

        const listId = this.refs.listId

        this.props.onSaveEdit(text, listId)
	}

	render() {

		let checkIcon, textStyle, starIcon
		let color = 'list';
		let isStared = 'functions';

		if(this.props.completed) {
			color = 'list gray';
			checkIcon = <i className="icon-check-circle"></i>
			textStyle = 'line-through';
		} else {
			checkIcon = <i className="icon-circle-thin"></i>
			textStyle = 'none';
		}

		if(this.props.stared) {
			isStared = 'functions isStared';
			starIcon = <i className="icon-star"></i>
		} else {
			starIcon = <i className="icon-star-o"></i>
		}

	    return (
	        <li className={ color }>
	            <div className="checkbox" onClick={ this.props.onComplete }>{ checkIcon }</div>
	            <div className="des">
	            	<input type="hidden" ref="listId" value={ this.props.id } />
	            	<input type="text" ref="content" style={{ textDecoration: textStyle }} defaultValue={ this.props.text } onBlur={(e) => this._handleEditText(e)} />
	            </div>
	            <div className={ isStared }>
	                <div onClick={ this.props.onStar }>{ starIcon }</div>
	                <div onClick={ this.props.onDelete }><i className="icon-trash-o"></i></div>
	            </div>
	        </li>
	    );

    }

};

export default List;

import React from 'react';

class TodoInput extends React.Component {

    _handleClick(e) {
        var code = (e.keyCode ? e.keyCode : e.which);

        const node = this.refs.input
        const text = node.value.trim()

        if(text!='' && (code == 13 || e.type == 'click')) {
            this.props.addItem(text)
            node.value = ''
        }
    }

    render() {

        return (
            <div className="inputFrame">
                <input type="text" ref="input" placeholder="Type Something..." onKeyPress={(e) => this._handleClick(e)} />
                <div className="plusSign" onClick={(e) => this._handleClick(e)}>
                    <i className="icon-add"></i>
                </div>
            </div>
        );
    }

}

export default TodoInput;
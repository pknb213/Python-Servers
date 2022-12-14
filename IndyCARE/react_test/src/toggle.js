import React from 'react';
import './index.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        );
    };
}

function ToggleBtn() {
    return (<Toggle/>);
}

export default ToggleBtn;
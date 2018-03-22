import React from 'react';
import ReactDom from 'react-dom';


// be attention:

//1. event named camelCase , rather then lowercase  onclick(html) ==>  onClick(JSX)

//2. return false cannot prevent default behavior, must call preventDefault method


function ActionLink() {
    function handleClickReturnFalse(e) {
        console.log('The link was clicked in return false');
        return false;
    }

    function handleClickPreventDefault(e) {
        e.preventDefault()
        console.log('the link was clicked in prevent default');
    }

    return (
        <div>
            <a href='https://www.baidu.com' onClick={handleClickReturnFalse}>return false demo(will jump to baidu)</a>
            <br/>
            <a href='https://www.baidu.com' onClick={handleClickPreventDefault}>preventDefault demo</a>
        </div>
    )
}


ReactDom.render(<ActionLink/>, document.getElementById('actionLink'));


// ES6 class event handler
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToogleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState((pre) => ({isToogleOn: !pre.isToogleOn}))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToogleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

ReactDom.render(<Toggle/>,document.getElementById('toggle'))

import React from 'react';
import ReactDom from 'react-dom';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //life cycle method mount
    componentDidMount() {
        console.log('render done');
        this.timeID = setInterval(
            () => {
                this.setState({date: new Date()})
            }, 1000
        )
    }

    //life cycle method unmount
    componentWillUnmount() {
        console.log('destroy done');
        clearInterval(this.timeID);

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDom.render(<Clock/>, document.getElementById('clock'));

// this.setState((prevState,props)=>{}

import React from 'react';
import ReactDom from 'react-dom';



function Welcome(props) {
    return <h1>Hello,{props.name}</h1>
}

class Welcome2 extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}

// Welcome is equivalent with Welcome2 ,Classes have more additional features.
const welcomeElement = <Welcome name='function demo'/>;
ReactDom.render(welcomeElement, document.getElementById('welcome'));


ReactDom.render(<Welcome2 name="class demo"/>, document.getElementById('welcome2'));
//


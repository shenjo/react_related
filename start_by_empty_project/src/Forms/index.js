import React from 'react';
import ReactDom from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit() {
        console.log(`a name was submitted :${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type="text" onChange={this.handleChange} value={this.state.value}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

ReactDom.render(<NameForm/>, document.getElementById('nameForm'));



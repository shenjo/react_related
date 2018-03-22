import React from 'react';
import ReactDom from 'react-dom';


function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>;
}


function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>

}


class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const button = isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick}/>
        ) : (<LoginButton onClick={this.handleLoginClick}/>);
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

ReactDom.render(<Greeting isLoggedIn={false}/>, document.getElementById('greeting'));


ReactDom.render(<LoginControl/>, document.getElementById('loginControl'));


function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>hello!</h1>
            {
                unreadMessages.length > 0 &&
                <h2>
                    you have {unreadMessages.length} unread messages.
                </h2>

            }
        </div>
    );
}


const unReadMessages = ['angularjs', 'vuejs', 'reactjs', 'react native'];

ReactDom.render(<MailBox unreadMessages={unReadMessages}/>, document.getElementById('mailbox'));


function Warning(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className='warning'>
            warning
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(preState => ({showWarning: !preState.showWarning}))
    }

    render() {
        return (
            <div>
                <Warning warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

ReactDom.render(<Page/>, document.getElementById('preventRendering'));

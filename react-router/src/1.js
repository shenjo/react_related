import React from 'react';
import {render} from 'react-dom';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.href.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashChange', () => {

        })
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <div>
                    <ul>
                        {/* 在应用中用 Link 去链接路由 */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>)
    }
}


class User extends React.Component{
    constructor(props){
        super
    }

    componentDidMount() {
        this.setState({
            // 路由应该通过有用的信息来呈现，例如 URL 的参数
            user: findUserById(this.props.params.userId)
        })
    },

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
                {/* 等等。 */}
            </div>
        )
    }
}

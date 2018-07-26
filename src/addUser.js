import React, {Component} from 'react';
import {data} from './redux/data';
import {withRouter} from "react-router-dom";

class AddUserContainer extends Component {
    state = {
        iterator: data.users.slice(-1)[0] ? data.users.slice(-1)[0].id+1 : 0,
        userName: '',
        user: []

    };

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readUser = this.readUser.bind(this);
        this.readPass = this.readPass.bind(this);
    }

    submit(evt) {
        evt.preventDefault();
        if(this.state.userName){
            this.state.user.name=this.state.userName;
            this.state.user.password=this.state.userPass;
            this.state.user.id=this.state.iterator;
            this.state.user.notes=[];
            this.props.history.push(`/user/${this.state.iterator}`);
            this.setState({
                userName: '',
                userPass: '',
                iterator: this.state.iterator+1,
                user:[]
            });
            return this.props.submit(this.state.user)
        }
        else alert('Wrong values!');
        evt.target.reset();
    }

    readUser(evt){
        return this.setState({
            userName: evt.target.value
        });
    }
    readPass(evt){
        return this.setState({
            userPass: evt.target.value
        });
    }

    render() {
        return (
            <div className="login">
                <form className="loginForm" onSubmit={this.submit} action="#">
                    <p>
                        <label htmlFor="login">Login:</label>
                    </p>
                    <input type="text" id="login" onChange={this.readUser} value={this.state.userName}/>
                    <p>
                        <label htmlFor="password">Password:</label>
                    </p>
                    <input type="password" id="password" onChange={this.readPass} value={this.state.userPass}/>
                    <p className="center">
                        <button className="button">Register</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default withRouter(AddUserContainer);

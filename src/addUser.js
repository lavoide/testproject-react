import React, {Component} from 'react';
import {data} from './redux/data';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class AddUserContainer extends Component {
    state = {
        iterator: data.users.slice(-1)[0] ? data.users.slice(-1)[0].id+1 : 0,
        userName: '',
        userPass: '',
        user: []
    };

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readUser = this.readUser.bind(this);
        this.readPass = this.readPass.bind(this);
        this.login = this.login.bind(this);
    }
    login(e){
        e.preventDefault();
        this.props.login(this.state.userName,this.state.userPass);
        if(this.props.hasUser>=0){
            this.props.history.push(`/user/${this.props.hasUser}`);
            this.setState({
                userName: '',
                userPass: '',
                iterator: this.state.iterator+1,
                user:[]
            });
        }
        else{alert("wrong values!")}
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
            return this.props.submit(this.state.iterator,this.state.userName,this.state.userPass)
        }
        else alert('Wrong values!');
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
                <form className="loginForm" action="#">
                    <p>
                        <label htmlFor="login">Username:</label>
                    </p>
                    <input type="text" id="login" onChange={this.readUser} value={this.state.userName}/>
                    <p>
                        <label htmlFor="password">Password:</label>
                    </p>
                    <input type="password" id="password" onChange={this.readPass} value={this.state.userPass}/>
                    <p className="center">
                        <button className="button" onClick={this.submit}>Register</button>
                        <button className="button" onClick={this.login}>Login</button>
                    </p>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hasUser: state.hasUser
    }
}
export default withRouter(connect(mapStateToProps)(AddUserContainer));

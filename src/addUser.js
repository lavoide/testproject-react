import React, {Component} from 'react';
import {data} from './redux/data';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as noteActions from "./redux/actions";

class AddUserContainer extends Component {
    state = {
        iterator: data.users.slice(-1)[0] ? data.users.slice(-1)[0].id+1 : 0,
    };

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readUser = this.readUser.bind(this);
        this.readPass = this.readPass.bind(this);
        this.login = this.login.bind(this);
        this.inputref=React.createRef();
        this.passref=React.createRef();
    }
    login(e){
        e.preventDefault();
        if((this.props.hasUser>0)&&(this.props.hasPassword>0)&&(this.props.hasUser===this.props.hasPassword)) {
            this.props.history.push(`/user/${this.props.userName}`);
            this.setState({
                iterator: this.state.iterator+1,
            });
            this.props.changeVis("none");
        }
        else alert("Wrong values!");
    }
    submit(evt) {
        evt.preventDefault();
        if(this.props.userName && this.props.userPass){
            this.props.history.push(`/user/${this.props.userName}`);
            this.setState({
                iterator: this.state.iterator+1,
            });
            return this.props.submit(this.state.iterator,this.props.userName,this.props.userPass)
        }
        else alert('Wrong values!');
    }

    readUser(evt){
        this.props.userLogin(this.props.userName);
        return this.props.sendUserName(evt.target.value);
    }
    readPass(evt){
        this.props.userPassword(this.props.userPass);
        return this.props.sendPass(evt.target.value);
    }

    render() {
        return (
            <div className="login">
                <form className="loginForm" action="#">
                    <p>
                        <label htmlFor="login">Username:</label>
                    </p>
                    <input type="text" id="login" ref={this.inputref} onChange={this.readUser} value={this.state.userName}/>
                    <p>
                        <label htmlFor="password">Password:</label>
                    </p>
                    <input type="password" id="password" ref={this.passref} onChange={this.readPass} value={this.state.userPass}/>
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
        hasUser: state.hasUser,
        hasPassword : state.hasPassword,
        userName: state.username,
        userPass: state.password
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeVis: bindActionCreators(noteActions.Actions.changeVis, dispatch),
        sendUserName: bindActionCreators(noteActions.Actions.sendUsername, dispatch),
        sendPass: bindActionCreators(noteActions.Actions.sendPass, dispatch),
        userLogin: bindActionCreators(noteActions.Actions.userLogin, dispatch),
        userPassword: bindActionCreators(noteActions.Actions.userPassword,dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddUserContainer));

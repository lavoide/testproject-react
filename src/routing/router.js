import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserNoteContainer from "../userNote";
import ChooseUserContainer from "../chooseUser";
import {routeName} from '../constants';
import AddUserContainer from "../addUser";
import * as noteActions from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {browserHistory} from 'react-routing';
import HomeButton from "../homeButton"
class RootRouter extends React.Component{
    constructor(props) {
        super(props);
        this.addUser = this.addUser.bind(this);
        this.login = this.login.bind(this);
    }
    login(username,password){
        this.props.changeVis("none");
        return this.props.userLogin(username,password);
    }
    addUser(user){
        this.props.changeVis("none");
        return this.props.addUser(user);
    }
    render(){
        return( <BrowserRouter history={browserHistory}>
            <div className="app">
                <header className="header">
                    <div className="wrap">
                        <div className="logo"><a href="#"><h1>Note App</h1></a></div>
                        <HomeButton/>
                    </div>
                </header>
                <div className={`addUser ${this.props.loginVisibility}`}>
                    <AddUserContainer
                        submit={this.addUser}
                        login={this.login}
                    />
                </div>
                <ChooseUserContainer/>
                <Route exact path={`/${routeName.USER}/:${routeName.ID}`} component={UserNoteContainer}/>
            </div>
        </BrowserRouter>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        loginVisibility: state.loginVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: bindActionCreators(noteActions.Actions.addUser, dispatch),
        changeVis: bindActionCreators(noteActions.Actions.changeVis, dispatch),
        userLogin: bindActionCreators(noteActions.Actions.userLogin, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RootRouter)
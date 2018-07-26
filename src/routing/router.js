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

class RootRouter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            show: ""
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser(user){
        this.setState({show:"none"});

        return this.props.addUser(user);
    }
    render(){
        return( <BrowserRouter history={browserHistory}>
            <div className="app">
                <header className="header">
                    <div className="wrap">
                        <div className="logo"><a href="#"><h1>Note App</h1></a></div>
                        <button onClick>home</button>
                    </div>
                </header>
                <div className={`addUser ${this.state.show}`}>
                    <AddUserContainer
                        submit={this.addUser}
                    />
                </div>
                <ChooseUserContainer/>
                <Switch>
                    <Route exact path={`/${routeName.USER}/:${routeName.ID}`} component={UserNoteContainer}/>
                </Switch>
            </div>
        </BrowserRouter>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: bindActionCreators(noteActions.Actions.addUser, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RootRouter)
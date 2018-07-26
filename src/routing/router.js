import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserNoteContainer from "../userNote";
import ChooseUserContainer from "../chooseUser";
import {routeName} from '../constants';
import AddUserContainer from "../addUser";
import * as noteActions from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class RootRouter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            show: ""
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser(data){
        this.setState({show:"none"});

        return this.props.addUser(data);
    }
    render(){
        return( <BrowserRouter>
            <div className="app">
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
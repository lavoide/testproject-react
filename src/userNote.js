import React from "react";
import ShowNoteContainer from "./showNote";
import AddNoteContainer from "./addNote";
import {connect} from "react-redux";
import * as noteActions from './redux/actions';
import {bindActionCreators} from "redux";
import AddUserContainer from "./addUser";

class UserNoteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.addUser = this.addUser.bind(this);
        this.sendNote1 = this.sendNote1.bind(this);
    }


    sendNote1(noteText,noteTheme) {
        return this.props.sendNote(this.props.match.params.id, noteText, noteTheme);
    }
    addUser(data){
        return this.props.addUser(data);
    }


    render() {
        console.log(this.props.rooms)
        return (
                <div>
                    <AddUserContainer
                        submit={this.addUser}
                    />
                    <div className="flexwrap">
                        <AddNoteContainer
                            submit={this.sendNote1}
                        />
                        {
                            this.props.users.map((el, index) =>
                                el.id === parseInt(this.props.match.params.id,10)
                                    ? <ShowNoteContainer
                                        key={index}
                                        notes={el.notes}
                                        room={this.props.match.params.id}
                                    />
                                    : null
                            )
                        }</div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendNote: bindActionCreators(noteActions.Actions.sendNote, dispatch),
        addUser: bindActionCreators(noteActions.Actions.addUser, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserNoteContainer)
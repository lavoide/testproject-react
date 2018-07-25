import React from "react";
import ShowNoteContainer from "./showNote";
import AddNoteContainer from "./addNote";
import {connect} from "react-redux";
import * as noteActions from './redux/actions';
import {bindActionCreators} from "redux";

class UserNoteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.sendNote1 = this.sendNote1.bind(this);
    }

    sendNote1(noteText,noteTheme,noteColor) {
        return this.props.sendNote(this.props.match.params.id, noteText, noteTheme, noteColor);
    }



    render() {
        return (
                <div>
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
                                        user={this.props.match.params.id}
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
        sendNote: bindActionCreators(noteActions.Actions.addNote, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserNoteContainer)
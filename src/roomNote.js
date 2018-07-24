import React from "react";
import ShowNoteContainer from "./showNote";
import AddNoteContainer from "./addNote";
import {connect} from "react-redux";
import * as noteActions from './redux/actions';
import {bindActionCreators} from "redux";

class RoomNoteContainer extends React.Component {

    constructor(props) {
        super(props);

        this.sendNote1 = this.sendNote1.bind(this);
    }


    sendNote1(noteText,noteTheme) {
        return this.props.sendNote(this.props.match.params.id, noteText, noteTheme);
    }

    render() {
        console.log(this.props.rooms)
        return (
                <div>
                    <div className="flexwrap">
                        <AddNoteContainer
                            submit={this.sendNote1}
                        />
                        {
                            this.props.rooms.map((el, index) =>
                                el.id === parseInt(this.props.match.params.id)
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
        rooms: state.rooms
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendNote: bindActionCreators(noteActions.Actions.sendNote, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomNoteContainer)
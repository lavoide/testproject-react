import React, {Component} from 'react';
import * as noteActions from './redux/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class EditButtons extends Component {
    constructor(props) {
        super(props);
        this.deleteNote1 = this.deleteNote1.bind(this);
        this.editNote = this.editNote.bind(this);

        this.state={
            user:props.user
        }
    }

    deleteNote1() {
        if(window.confirm("Do you really want to delete this note?"))
            return this.props.deleteNote(this.props.id,this.state.user);
    }
    editNote(){
        return this.props.editNote(this.props.id,this.state.user);
    }
    render(){
        return(
            <div className="editbuttons">
                <button className="button" onClick={this.editNote}>edit</button>
                <button className="button" onClick={this.deleteNote1} >X</button>
            </div>)
    }
}
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteNote: bindActionCreators(noteActions.Actions.deleteNote, dispatch),
        editNote: bindActionCreators(noteActions.Actions.editNote, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditButtons);
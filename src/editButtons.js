import React, {Component} from 'react';
import * as noteActions from './redux/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class EditButtons extends Component {
    constructor(props) {
        super(props);
        this.deleteNote1 = this.deleteNote1.bind(this);

        this.state={
            room:props.room-1
        }

    }

    deleteNote1() {
        return this.props.deleteNote(this.props.id,this.state.room);
    }
    render(){
        return(
            <div className="buttons">
                <button onClick={this.editHandler}>edit</button>
                <button onClick={this.deleteNote1}>delete</button>
            </div>)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        deleteNote: bindActionCreators(noteActions.Actions.deleteNote, dispatch)
    }
}
export default connect(null,mapDispatchToProps)(EditButtons);
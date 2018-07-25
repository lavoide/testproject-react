import React, {Component} from 'react';
import * as noteActions from './redux/actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class EditButtons extends Component {
    constructor(props) {
        super(props);
        this.deleteNote1 = this.deleteNote1.bind(this);

        this.state={
            user:props.user
        }
    }

    deleteNote1() {
        if(window.confirm("Do you really want to delete this note?"))
            return this.props.deleteNote(this.props.id,this.state.user);
    }
    render(){
        return(
            <div className="buttons">
                <button onClick={this.editHandler}>edit</button>
                <button onClick={this.deleteNote1} >delete</button>
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
        deleteNote: bindActionCreators(noteActions.Actions.deleteNote, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditButtons);
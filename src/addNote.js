import React, {Component} from 'react';
import {color} from './constants'
import {connect} from "react-redux";
import * as noteActions from "./redux/actions";
import {bindActionCreators} from "redux";

class AddNoteContainer extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readNote = this.readNote.bind(this);
        this.readTheme = this.readTheme.bind(this);
        this.readColor = this.readColor.bind(this);
    }

    submit(evt) {
        evt.preventDefault();
        if(this.props.noteTheme && this.props.noteText){
            this.props.submit(this.props.noteText,this.props.noteTheme,this.props.noteColor);
            this.props.readNote('');
            this.props.readTheme('');
            this.props.readColor(color.YELLOW);
        }
        else alert('Wrong values!');
    }

    readNote(evt) {
        return this.props.readNote(evt.target.value);
    }
    readTheme(evt){
        return this.props.readTheme(evt.target.value);
    }
    readColor(evt){
        switch(evt.target.value) {
            case color.BLUE:
                return this.props.readColor(color.BLUE);
            case color.RED:
                return this.props.readColor(color.RED);
            case color.GREEN:
                return this.props.readColor(color.GREEN);
            case color.YELLOW:
                return this.props.readColor(color.YELLOW);
            default:
                return this.props.readColor(color.YELLOW);
        }
    }
    componentDidMount(){
        return this.props.readColor(color.YELLOW);
    }
    render() {
        return (
            <div className={`note ${this.props.noteColor}`}>
                <form className="noteform" onSubmit={this.submit} action="#" >
                    <p>Theme: <input type="text" className={`${this.props.noteColor}`} onChange={this.readTheme} value={this.props.noteTheme}/></p>
                    <textarea className={`${this.props.noteColor}`} onChange={this.readNote} placeholder="Your note text..."
                               value={this.props.noteText} name="note" id="note">{this.props.noteText}</textarea>
                    <ul>
                        <li>
                            <input type="radio" id="1" className="radio" name="gender" value="green" onChange={this.readColor} />
                            <label htmlFor="1" className="label1">green</label>
                        </li>
                        <li>
                            <input type="radio" id="2" className="radio" name="gender" value="blue" onChange={this.readColor}/>
                            <label htmlFor="2" className="label2">blue</label>
                        </li>
                        <li>
                            <input type="radio" id="3" className="radio" name="gender" value="red" onChange={this.readColor}/>
                            <label htmlFor="3" className="label3">red</label>
                        </li>
                        <li>
                            <input type="radio" id="4" className="radio" name="gender" value="yellow" onChange={this.readColor} defaultChecked/>
                            <label htmlFor="4" className="label4">yellow</label>
                        </li>
                    </ul>
                    <button className="button">add</button>
                    <p className="date">{new Date().toString().split(' ').splice(1,3).join(' ')}</p>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        noteText: state.noteText,
        noteTheme: state.noteTheme,
        noteColor: state.noteColor,
        editedNote: state.editedNote
    }
}

function mapDispatchToProps(dispatch) {
    return {
        readNote: bindActionCreators(noteActions.Actions.readNote, dispatch),
        readTheme: bindActionCreators(noteActions.Actions.readTheme, dispatch),
        readColor: bindActionCreators(noteActions.Actions.readColor, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNoteContainer);



import React, {Component} from 'react';
import {color} from './constants'

class AddNoteContainer extends Component {

    state = {
        noteText: '',
        noteTheme:'',
        noteColor:color.YELLOW
    };

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.readNote = this.readNote.bind(this);
        this.readTheme = this.readTheme.bind(this);
        this.readColor = this.readColor.bind(this);
    }

    submit(evt) {
        evt.preventDefault();
        if(this.state.noteTheme && this.state.noteText){
            this.setState({
                noteText: '',
                noteTheme: ''
            });
            return this.props.submit(this.state.noteText,this.state.noteTheme,this.state.noteColor);
        }
        else alert('Wrong values!');
        evt.target.reset();
    }

    readNote(evt) {
        return this.setState({
            noteText: evt.target.value
        });
    }
    readTheme(evt){
        return this.setState({
            noteTheme: evt.target.value
        });
    }
    readColor(evt){
        switch(evt.target.value) {
            case color.BLUE:return this.setState({
               noteColor: color.BLUE
           });
            case color.RED:return this.setState({
                noteColor: color.RED
            });
            case color.GREEN:return this.setState({
                noteColor: color.GREEN
            });
            case color.YELLOW:return this.setState({
                noteColor: color.YELLOW
            });
        }
    }

    render() {
        return (
            <div className={`note ${this.state.noteColor}`}>
                <form className="noteform" onSubmit={this.submit} action="#">
                    <p>Theme: <input type="text" className={`${this.state.noteColor}`} onChange={this.readTheme} value={this.state.noteTheme}/></p>
                    <textarea className={`${this.state.noteColor}`} onChange={this.readNote} placeholder="Your note text..."
                               value={this.state.noteText} name="note" id="note">{this.state.noteText}</textarea>
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

export default AddNoteContainer;
